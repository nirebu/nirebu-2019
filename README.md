# nirebu-2019

[![Netlify Status](https://api.netlify.com/api/v1/badges/cbde63aa-755a-4e12-a1a3-407beeaffe5c/deploy-status)](https://app.netlify.com/sites/nirebu/deploys)

> Personal website for Nicolò Rebughini

A little place to fool around with new things and post some ramblings in a blog

## Build setup

Clone this repo, then

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Next steps

Not a comprehensive list of things I want to do

### Code styling

Styling for embedded blocks of code

### Vuex integration

I want to make the process to grab the blog posts (correlating the slugs to the filenames) more robust storing them in the Vuex store, so I can said data to display a blog posts list without having to fetch read the file system again. Also, I will be able to decouple the slugs from the filenames.

### Latest articles component

To showcase the most recent articles in the home page

### Last.fm integration

I want to design a page and some Vue components, consuming data fetched from my [last.fm profile](https://last.fm/user/nirebu/)