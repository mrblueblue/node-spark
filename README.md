A command handler for Spark devices.

Handles commands through a GUI and simple REST calls.

######Basic Info
There are two main js files.

The spark.js file sets up an Express server that serves a static UI page. It also handles POST requests from a user. If the requested command is a valid function exposed by the Spark device, then it will tell the Spark device to execute the command.

The turn.js file is a request-handler module for the server. It translates the intent of the user into a POST request to the Spark device.

Note: one can certainly make direct POST requests to the Spark device using curl.

######TODOS
- armor app for security
- GUI buildout
- modularize functions