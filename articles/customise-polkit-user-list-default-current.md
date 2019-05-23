---
title: How to make polkit default to the currently logged in user
published: true
description: Change the default behaviour of polkit in order to not list all the admin users when commands need root elevation
tags: polkit,javascript,permissions,centos
ctime: 2019-05-24
---

## The problem

Have you ever launched a command that needing root level permissions as a puny normal user? When doing so on systems equipped with polkit, and your user have administrative permissions (in the `wheel` group), you get a prompt to enter your password. So far so good.

If it happens that on that particular systems there are multiple users in the `wheel` group, you get an ugly list of usernames, separating you from the quick "I'll just enter my password and be done with it". Why would I use (or know) the password of another user? I see that as a mild security issue or just an encouragement for bad practice.

```bash
nrebughini@host $ poweroff
==== AUTHENTICATING FOR org.freedesktop.login1.power-off ===
Authentication is required for powering off the system.
Multiple identities can be used for authentication:
 1.  admin1
 2.  admin2
 3.  admin3
 4.  nrebughini # Polkit, Y U NO make this the default one at least?
 5.  admin5
Choose identity to authenticate as (1-5):
```

## The solution

The behaviour I wish it had would be:

- If the current user is in the wheel group, prompt me for my password
- Else, prompt me for the root password

Translating this to polkit rules, I created a new rule file in `/etc/polkit-1/rules.d/` named `00-custom.rules`:

```javascript
// 00-custom.rules

polkit.addAdminRule(function(action, subject) {
    if( subject.isInGroup("wheel") ) {
        return ["unix-user:"+subject.user];
    }
    else {
        return [polkit.Result.NO];
    }
});
```

This effectively reduces the list of selectable users to only the current user, only if they're present in the `wheel` group.

```bash
nrebughini@host $ poweroff
==== AUTHENTICATING FOR org.freedesktop.login1.power-off ===
Authentication is required for powering off the system.
Authenticating as: Nicolò Rebughini (nrebughini)
Password:
```

Much cleaner and I'm not exposing every admin account on the system, nor encouraging bad practices to use other people's passwords.