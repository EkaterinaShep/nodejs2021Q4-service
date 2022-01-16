# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://hub.docker.com/search?q=&type=edition&offering=community).
- Docker Compose - [Install Docker Compose](https://docs.docker.com/compose/install/), if necessary.

## Working with Docker
1. Clone the repository:
   ```sh
   git clone https://github.com/EkaterinaShep/nodejs2021Q4-service
   ```
2. Go into the repository:
   ```sh
   cd nodejs2021Q4-service/
   ```
3. Switch branch:
   ```sh
   git checkout docker
   ```
4. Run one or some of the commands:
   * Build, create, start and attach to containers for a service with building images before starting containers:
      ```sh
      docker-compose up --build
      ```
   * Stop running containers without removing them:
      ```sh
      docker-compose stop
      ```
   * List Docker images:
      ```sh
      docker images
      ```
   * Remove containers, networks, volumes, and images ([choose options](https://docs.docker.com/compose/reference/down/)):
      ```sh
      docker-compose down [options]
      ```
## Downloading

```sh
git clone https://github.com/EkaterinaShep/nodejs2021Q4-service
```

## Installing NPM modules

```sh
npm install
```

## Running application
* In production mode

   ```sh
   npm build
   npm start:prod
   ```
* In development mode

   ```sh
   npm start:dev
   ```
## Testing

After application running open new terminal and enter:

To run all tests without authorization

```sh
npm test
```

To run only one of all test suites (users, boards or tasks)

```sh
npm test <suite name>
```

To run all test with authorization

```sh
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```sh
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```sh
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
