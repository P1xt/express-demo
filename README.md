# Express Demo

Minimal express.js app to demonstrate the use of fetch with a Pug/Jade template to retrieve data from a REST API served by other routes on the Express app.
    
Where the interesting stuff happens:
    
Look in views/index.pug for an example of pulling JavaScript files into the Pug template.
    
Look in public/javascripts/get_animal.js for an example of using fetch to perform a GET request against the API, then using JavaScript to update DOM elements based on the result.

    
Important to note: This is a minimal example, intended only to illustrate the use of fetch within a Pug template, and vanilla JavaScript methods for manipulating the DOM with the results. It is missing "important stuff" that would be important in a "real application". Notably, there should be unit tests built in, there are npm scripts for linting and running the server but nothing setup to bundle (minify, transpile, etc) the code for production, watch for code changes and browser refresh on dev, automatically test and lint on build, etc. All those things are important - but I decided that for the case of a simple demo, they'd distract from the main point "this is how to fetch data and update the DOM in a pug template".