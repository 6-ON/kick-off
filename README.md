# Kick Off

## Description

    Kick Off is a mobile application that allows users to view featured football matches and players. Users can view match details and player details.

## Features

-   View featured football matches
-   View Match details
-   View featured football players
-   View player details

## Technologies

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)

## Installation

### Prerequisites

-   [Node.js](https://nodejs.org/en/)

### Steps

-   Ensure you have Node.js installed
-   Clone the repository
-   Run `npm install` to install dependencies
-   Run `npm start` to start the application

### Dockerization

-   Ensure you have [Docker](https://www.docker.com/) installed
-   run `docker build -t kick-off .` to build the docker image
-   run `docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 kick-off` to run the docker container

## Testing

run `npm test` to run tests
