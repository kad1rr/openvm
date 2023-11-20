# OpenVM HTTP Library Documentation

This document provides detailed information about the HTTP library used in OpenVM. The library
allows you to create an HTTP server and handle requests based on predefined handles.

## Table of Contents

- [Http Class](#http-class)
  - [Constructor](#constructor)
  - [handle() Method](#handle-method)

## Http Class

The `Http` class is designed to work with OpenVM's HTTP functionality. It allows you to create an
HTTP server and define handles to respond to specific requests.

### Constructor

#### `constructor(memory: any[])`

- **Description:** Creates an instance of the `Http` class.
- **Parameters:**
  - `memory`: An array representing the memory of the OpenVM.

### handle() Method

#### `handle()`

- **Description:** Starts the HTTP server and handles incoming requests based on predefined handles.
- **Usage:**
  ```javascript
  const httpInstance = new Http(memory)
  httpInstance.handle()
  ```

## Handles

Handles are defined in the handles array within the Http class constructor. Each handle is an array
containing information about the HTTP method, URL, and the corresponding context to be returned.

## Example Handle

```javascript
;['get:/path', 'Response context']
```

In this example, the handle listens for a GET request at the /path URL and responds with the
specified context.
