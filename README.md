# Node-seed

An opinionated seed project for node-based microservices.

## Description

Everyone has their opinions, mine is that simplicity is a brilliant foundation for almost everything. So here's my opinionated take on the structure and interface of a basic microservice. Simplicity with microservices at scale implies some level of homogenity, even if it's only on an infrastructure level, because it gives a common target for all types of tooling, monitoring, deployments, and even jargon.

So essentially we've just got a simple express server which should be built into a docker image.

## Getting started

### Cloning the seed project

The recommended approach (least manual work) is to:

1. Create & clone a repo
2. Set this repository as an additional remote.
3. Git-pull the new remote!

```sh
cd <your-repo-here>
git remote add seed git@github.com:bbultman/seed.git
git pull seed master
```

Then, you'll be able to start with a fresh copy of the node-seed project, and start customizing from there.

### Setup

You'll need a recent LTS version of node, and npm of course. [Nvm](https://github.com/creationix/nvm) is probably the best choice if you're starting on a fresh machine, an `.nvmrc` file is included in the project so you can always switch to the correct version for this project.

Once you have node/npm, run an `npm install`, followed by an `npm start` and you'll be good to go. Nodemon will restart the application whenever any relevant files change (see `nodemon.json` for exact files/directories).

Note: production deploys probably shouldn't contain nodemon, so use `npm run serve` for that use-case. Check the Dockerfile for a basic idea of the setup.

### Configuration

Configuration is not secret management. Secrets shall _never_ ever be included in a git repo. If your project depends on something which should not be known by anyone (credentials of any kind, for example), they should be made available to your application only at runtime through environment variables.

Accessing configuration is done anywhere in the application by requiring the config module:

```javascript
const config = require('./config')
```

This hides the implementation details from the application and helps us maintain some separation of concerns.

Config is stored in `config/<env>.json`, where `<env>` is the value of the NODE_ENV environment variable. Usually probably `development | production | test`.

All values are overridable locally by using a `.env` file. An example file is included (`.env.example`), copy it as `.env` and override any config values you want for a simple dev workflow. No more checking in temporary config changes, and nodemon will reload the app as soon as you change anything -- nice!

For more information about this config setup, check out [exp-config](https://www.npmjs.com/package/exp-config).

### Testing

Ideally implement unit tests alongside your library code, like so:

```sh
/src
  /lib
    /thing.js
    /thing.test.js
```

It makes it obvious when tests are missing. The standard `npm test` script will pick up all `**/*.test.js` files.

If your directory is getting cluttered, you may want to turn a file into a folder-module instead:

```sh
/src
  /lib
    /thing
      /index.js
      /thing.js
      /thing.test.js
```

In javascript these two examples are identical from a consumer perspective, `const thing = require('./src/lib/thing')` while the folder structure helps to keep things organized.

It's probably not a bad idea to include some endpoint and scenario testing as well. YMMV. More to follow.

### Logging

All logging is pushed to stdout to make the application simple to inspect during runtime. No files, no problem! If you prefer file-based logging it's trivial to do that either within the application or on a process level. Stdout is a nice starting point regardless.

### nvm

If you're a user of nvm, feel free to run `nvm use` in this project so you'll always be running the correct version of node.
