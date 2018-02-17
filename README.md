# Express Demo

Minimal express.js app to demonstrate the use of fetch with a Pug/Jade template to retrieve data from a REST API served by other routes on the Express app.
    
## Where the interesting stuff happens:
    
* Look in views/index.pug for an example of pulling JavaScript files into the Pug template.
    
* Look in public/javascripts/get_animal.js for an example of using fetch to perform a GET request against the API, then using JavaScript to update DOM elements based on the result.

## To run

* clone or download
* cd express-demo
* npm install
* npm start
    
----------
    
**Important to note:** This is a minimal example, intended only to illustrate the use of fetch within a Pug template, and vanilla JavaScript methods for manipulating the DOM with the results. There are a bunch of other things that are beyond the scope of demonstrating fetch that would be necessary for a production quality application that I've elected not to include as they'd add a lot of extra bulk, without adding any clarity to the demo. Namely:

* Unit testing
* Production bundling
* Dev reloading
* etc, etc, etc

I know the other stuff is important - but it would have added a lot of noise to sift through to get to the code this repo is actually meant to illustrate.