# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js: attempting to start a server on a port that is already in use.  The `bug.js` file shows the error-causing code, while `bugSolution.js` provides a robust solution.

## How to Reproduce the Error

1. Run `bug.js`.
2. If the server starts successfully, immediately run `bug.js` again in another terminal.
3. Observe the error message, which indicates that the port is already in use.

## Solution

The `bugSolution.js` file demonstrates how to gracefully handle this error by checking for port availability before starting the server.  It utilizes asynchronous operations to avoid blocking the main thread.