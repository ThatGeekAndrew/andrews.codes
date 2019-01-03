# andrews.codes

This may one day be a private repo but until then, cheers.

Note: This project uses the [Angular Firestarter](https://github.com/codediodeio/angular-firestarter) project as a base. Try it!

- [Live Portfolio](https://andrews.codes/)

## Features

- Angular 7.x
- 100 PWA Lighthouse Score with NGSW
- Firebase Auth, Storage, and Cloud Firestore Demos
- Angular Universal Prerendered SSR (deployed to Firebase Static Hosting)
- End-to-End Testing with Cypress.io
- Continuous Integration with CircleCI

## Usage

1.  Run

- `git clone https://github.com/geeksmarter/andrews.codes.git andrewsportfolio`
- `cd andrewsportfolio`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://angularfirebase.com/wp-content/uploads/2017/04/firebase-dev-prod-credentials.png)

3.  Add the config to your Angular environment

#### src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '123456789'
  }
};
```

4.  Open `src/app/app.module.ts` and replace the `firebasePlaceholderConfig` with your environment, i.e `environment.firebase`

5.  And finally `ng serve`
