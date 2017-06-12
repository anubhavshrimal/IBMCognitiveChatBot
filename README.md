# IBMCognitiveChatBot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

------------------------------------------
TODO:
1. Remove init.js from angular-cli.json and file itself if not needed.

## Commands to run:

- run `npm install` to install all the required node modules.
- run `ng serve -o` for a dev server which will open project in browser.

- offset the content by the width of the side-banner
```css
main{
    padding-left: 250px;
}

@media only screen and (max-width : 992px) {
    main{
    padding-left: 0;
    }
}
```

## Components:
All the components are present in `src/app/components`.

1. **side-banner**:
- Represents the left side banner with IBM Chatbot icon in the middle.
- Tag to use: `<side-banner><side-banner>`

2. **signup**:
- The welcome page asking for details of the user or to select an avatar.
- Tag to use: `<signup></signup>`
- Features:
...Input validation only in case if no avatar is selected.
...Validation through angular 4 standards.
...Email validation using angular 4 email directive.
...Name fields required validations.
...Avatars array in the component so that multiple avatars can be shown using *ngFor.
...Material design based input fields and buttons.