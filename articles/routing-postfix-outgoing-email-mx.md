---
title: How to route Postfix outgoing email based on recipients' MX records
published: true
description: Learn how to route Postfix MTA outgoing email on different transports, based on the recipient domain MX record
tags: postfix,linux,email
ctime: 2020-02-20
---

[Postfix](http://www.postfix.org/BASIC_CONFIGURATION_README.html) documentation and examples can be everything between daunting and obscure. So here's a roundup of the process that led me to achieve what I thought it was possible because I *knew* Postfix could do that, I'd only have had to find the correct way.

## The problem at hand

Let's say we have a large constant amount of outgoing email and we want to manage this uniform stream in separate streams, with different rules for different providers.

When sending to the usual popular consumer domains, it's easy to tell them apart and create different rulesets based on just the recipient domain. The real issue arises when you have business domains using third party cloud services like **Gsuite** or **Office 365** to account for: you cannot manage them with the domain alone. Well, *you could*, but that would imply checking the MX records for every single domain and inserting a transport rule for each one. Luckily, Postfix already does this to know which MTA it needs to connect to, so we just need to to find a way to harness this.

## Obscure config lines to the rescue

Navigating the above mentioned behemoth, and testing more configs than I'd like to admit, I found the succesful combination of parameters that made me achieve this.

We instruct the Postfix MTA to use certain rules (or restrictions) based on some recipients' parameters. In our case we're looking at the MX record of the domain, so we need to add a special line to our Postfix `main.cf` to activate this feature. The specific restriction we want to setup is the `check_recipient_mx_access` on the `smtpd_recipient_restrictions` config. We also need to tell Postfix what `access` rules to apply, and we'll define these in a brand new `mxtransport` file.

```bash
# Add this line to /etc/postfix/main.cf

smtpd_recipient_restrictions = check_recipient_mx_access regexp:/etc/postfix/mxtransport
```

## Flex our regex skills

We can determine the MX records of a domain, taking a peek to what provider is behind it with a basic `dig` command.

```bash
dig +short MX example.com

# 10 incoming.myesp.com
# 20 backup.incoming.myesp.com
```

As defined by the above rule, our `access table` `mxtransport` will be of the `regexp` type, so we can add as many regexes as we want to *filter* the cloud provider based domains on their respective transports.

```
# /etc/postfix/mxtransport
# our custom file containing the regexes and filtering rules

# the above mentioned example.com would result in this regex
# matching the common parts of the records
/incoming\.myesp\.com$/ FILTER myesp_transport:

# gsuite based domain MX records always end with aspmx.l.google.com
# so we can add this
/aspmx\.l\.google\.com$/ FILTER gsuite:
```

Assuming we have already those transports configured on our `/etc/postfix/master.cf` and `/etc/postfix/transport`, with some additional rules in our `/etc/postfix/main.cf`, we should be good to go.

When we're happy with the boatload of regexes, we can make these effective by restarting or reloading the Postfix service with:

```bash
systemctl reload postfix
# OR
systemctl restart postfix
```

## Final checks

We can now try to send a new message to one of the domains activating one of these filters and we should see added to our log lines something like the following:

```
triggers FILTER myesp_transport:
```

meaning that relevant messages are now routed in different transports based on the recipient MX records.
