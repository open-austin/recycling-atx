## Recycling-atx :recycle:

Shows you which buildings in Austin recyle and which ones do not. 

This is an open-source project through [Open-Austin](http://www.open-austin.org/).

This is a fork of https://github.com/open-city/recycling.

### Goals for this fork are to build:

- REST API that can be hosted easily on more than just Heroku. This means:
  - No Mongo dependency. Use a relational database like Postgres (or maybe GitHub pages).
    - No memcached dependency. We can figure out scaling later.
      - https://github.com/open-austin/recycling-bin/issues/1
      - Frontend that consumes the API. It should be just static files that can be hosted on GitHub pages.

### Purpose of this fork
This repo is a front end component that consumes the API provided by https://github.com/open-austin/recycling-bin


      #### License

      Released to the public domain under [the Unlicense](http://unlicense.org/) by Open Austin, 2015.

      #### Contributing

      Please see [CONTRIBUTING.md](CONTRIBUTING.md).

