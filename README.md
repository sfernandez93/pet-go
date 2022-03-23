<p align="center">
    <img src="https://www.isdi.education/uploads/media/open-graph/08/1278-Captura%20de%20pantalla%202021-09-24%20a%20las%2014.22.27.png?v=1-0" alt="ISDI-logo" width="100"/>
    <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="npm-logo" width="50"/>
    <img src="https://i.blogs.es/545cf8/es6-logo/450_1000.png" alt="es6-logo" width="50"/>
    <img src="https://teorema-rd.com/storage/2020/05/Html5-JS-css-logo.jpg" alt="html5-css3-js-logo" width="150"/>
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" alt="es6-logo" width="100"/>
    <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" alt="react-logo" width="100"/>
    <img src="https://blog.back4app.com/wp-content/uploads/2021/02/firebase.png" alt="firebase-logo" width="100"/>
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--E7SQLjAt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5d14su1hfqzbeqa2qhbr.png" alt="email-js-logo" width="100"/>
    <img src="https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png" alt="firebase-logo" width="100"/>
    <img src="https://www.adue.digital/wp-content/uploads/2021/06/tailwind-css-logo-vector.png" alt="tailwind-logo" width="100"/>
</p>

---

## Description

Petgo is a social app for the adoption of animals that are in foster care by animal shelters. Animal shelters can upload them to the platform. Pets are displayed in a search engine, in which the user can mark them as favourite and consult information or contact details about them.

---

## Screenshoots

<p align="center">
  <img src="/screenshots/login-screenshot.JPG" width="15%" />
  <img src="/screenshots/search-screenshot.JPG" width="15%" />
  <img src="/screenshots/detail-screenshot.JPG" width="15%" />
  <img src="/screenshots/upload-screenshot.JPG" width="15%" />
  <img src="/screenshots/favorites-screenshot.JPG" width="15%" />
</p>

---

## Installation

You need to run commands: `npm install`

---

### To run the server:

```
$ npm run start
```

All dependencies will be installed automatically

### To run in dev mode or debugg mode:

```
$npm run dev
```

```
$npm dev:debug
```

## API

The server part has multiple **API endpoints** using several routes:

- `/login` -> Serves the authentication options, register and login.
- `/search` -> Serves the internal data about pets.
- `/upload` -> Serves to upload data about pets to firebase database.
- `/favorites` -> Serves the internal data of favorite pets of the registered or logged in user.
- `/detail` -> Serves the internal data of a particular pet.

---

## Built with:

- **Front-end**

  - react: 17.0.2
    - react-router: 6.2.2
    - react-jwt: 1.1.4
    - react-firebase: 5.0.3
  - cypress: 9.5.2
  - tailwindcss: 3.0.23

---

## Author

[Sabela Fernández Villar](https://github.com/sfernandez93)
