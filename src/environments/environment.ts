// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://localhost:3000',
  apiUrl: 'https://brain-boost-backend.herokuapp.com',
  firebase: {
    apiKey: "AIzaSyAa-hzfcGqc8l1sdFWQp7j-b0b24BkK-fM",
    authDomain: "brain-boost-d6714.firebaseapp.com",
    databaseURL: "https://brain-boost-d6714.firebaseio.com",
    projectId: "brain-boost-d6714",
    storageBucket: "brain-boost-d6714.appspot.com",
    messagingSenderId: "517962038747",
    appId: "1:517962038747:web:2bb2306697d79f5a697bfe"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
