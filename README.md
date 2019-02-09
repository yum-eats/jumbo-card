# Project Name

> Project description

## Related Projects

  - https://github.com/yum-eats/jumbo-card
  - https://github.com/yum-eats/Customer-Reviews
  - https://github.com/yum-eats/photo-gallery
  - https://github.com/yum-eats/calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. To run the seed script, you must have the
    - dbconneection directory that consists mongodbconnection and schema script
    - seed directory that holds the seed.js script
2. You may need to change mongoURI in the connection.js file to your database name

```js
// connection.js
const mongouri = 'mongodb://localhost:27017/<your database name>';
```
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

