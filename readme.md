### Kabrich

Kabrich is a base website for advertising rental properties.  It is a static [Angular](https://angularjs.org/) app.  David McGrath created it for use at [kabrich-home.com](http://kabrich-home.com/) for a property in Blacksburg, Virginia.

#### Set Up

Check out this repository.

Install [Node.js](https://nodejs.org/).

In a terminal, change to the root of the repository.

Execute the following commands:

    npm install -g gulp
    npm install -g karma
    npm install -g http-server
    npm install

#### Build & Develop

In a terminal, change to the root of the repository.

To build, lint, and test once, execute the following:

    gulp

To build, lint, and test continuously, execute the following:

    gulp watch

To run the site, change into the `app` directory and execute

    http-server

Then open a browser and navigate to [http://localhost:8080/](http://localhost:8080/)

Have fun!
