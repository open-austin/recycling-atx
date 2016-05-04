## Recycling-atx :recycle:

Shows you which buildings in Austin recycle and which ones do not.

This is an open-source project through [Open-Austin](http://www.open-austin.org/).

This is a fork of https://github.com/open-city/recycling.

### Developing locally

1. Clone this repo
2. `npm install` - Install dependencies
3. `gulp build` - Build javascript and css assets
4. `gulp webserver` - Spin up a local webserver
5. `gulp deploy-gh-pages` - Ship it! :shipit:

### Goals for this fork are to build:

- REST API that can be hosted easily on more than just Heroku. This means:
  - No Mongo dependency. Use a relational database like Postgres (or maybe GitHub pages).
    - No memcached dependency. We can figure out scaling later.
      - https://github.com/open-austin/recycling-bin/issues/1
      - Frontend that consumes the API. It should be just static files that can be hosted on GitHub pages.

### Purpose of this fork
This repo is a front end component that consumes the API provided by https://github.com/open-austin/recycling-bin

### Resources

Check out Austin's Universal Recycling Ordinance & Timeline [Here] (http://austintexas.gov/uro)


The Universal Recycling Ordinance (URO) supports Austin’s Zero Waste goal by requiring affected property owners to ensure that tenants and employees have access to convenient recycling. These properties include multi-family residential properties (e.g. apartments and condos), commercial non-residential properties and food enterprises:


Check out more awesome Open-Austin Projects [Here](https://github.com/open-austin)

Interested in a particular project? Come to the next Open-Austin [Meetup](http://www.meetup.com/Open-Government-Civic-Technology-Meetup-by-Open-Austin/)

### Contributing
* [Gus Ireland](http://github.com/gusIreland)
* [Preston Pham](http://github.com/prestonp)
* [Derek Gulledge](http://github.com/srickshaw)
* [Marco Pineda](http://github.com/mapineda)



      #### License

      Released to the public domain under [the Unlicense](http://unlicense.org/) by Open Austin, 2015.

      #### Contributing

      Please see [CONTRIBUTING.md](CONTRIBUTING.md).
