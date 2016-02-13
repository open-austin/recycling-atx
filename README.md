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


Check out Austin's Universal Recycling Ordinance [Here] (http://austintexas.gov/uro)
The Universal Recycling Ordinance (URO) supports Austin’s Zero Waste goal by requiring affected property owners to ensure that tenants and employees have access to convenient recycling. These properties include multi-family residential properties (e.g. apartments and condos), commercial non-residential properties and food enterprises:

5 requirements:
1. Provide recycling for plastics #1 & #2, paper, cardboard, glass, and aluminum.
2. All trash collection service containers (i.e. dumpsters, carts, or compactors) or other collection points (i.e. chutes) should have a recycling container within 25 feet. For mutlifamily properties, recycling service capacity must ≥ 6.4 gallons per dwelling per week. For commercial properties, Make sure recycling capacity is equal to or larger than your total on site trash capacity. Recycling capacity can include single-stream dumpster services as well as any other diversion activities (reuse, repurpose, recycled, back-hauled, scrapped, donated, or baled).
3. All signs must indicate recyclable materials accepted, use graphic illustrations, and include both English and Spanish.
4. Educate new employees and tenants within 30 days of hire or move-in and annually thereafter.
5. Submit an annual diversion plan online each year between Oct. 1 and Feb. 1.


Check out more awesome Open-Austin Projects [Here](https://github.com/open-austin)

Interested in a particular project? Come to the next Open-Austin [Meetup](http://www.meetup.com/Open-Government-Civic-Technology-Meetup-by-Open-Austin/)

### Contributing
* [Gus Ireland](http://github.com/gusIreland)
* [Preston Pham](http://github.com/prestonp)
* [Derek Gulledge](http://github.com/)
* [Marco Pineda](http://github.com/mapineda)



      #### License

      Released to the public domain under [the Unlicense](http://unlicense.org/) by Open Austin, 2015.

      #### Contributing

      Please see [CONTRIBUTING.md](CONTRIBUTING.md).
