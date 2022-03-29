# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`
Launches the test runner and generates code coverage\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Instruction to run an application`

1. Install npm dependencies `npm install`
2. Build an Widget `npm run build`
3. Open production version of widget `npm run start:httpServer`
4. Go to `http://localhost:8080/`

### `Notes`

To use the widget on any html page the build script must be included via `script` tag and HTML tag with class `poll_widget` must exist.
To configure the `question` for the widget `data-question` attribute for element with class `poll_widget` should be used.
To configure the `options` for the widget `data-options` attribute for element with class `poll_widget` should be used. The options should be separated by semicolon `;`

It is possible to have multiple widgets on the same page, but they must have unique `id` attribute.
If there is only 1 widget on the page `id` attribute is not required. In this case url of the page will be identifier of widget.

For testing purposes 2 widgets are added to the same html page.
If the second html page is needed it is created by copying `index.html` to `secondPage.html`. It is accessible on `http://localhost:8080/secondPage.html` (make sure you ran `npm run start:httpServer`).

For configuration was decided to go with the simples way. The consumer is responsible to provide the data for the widget, and widget to display them and save (in our case in `localStorage`).

The Application is bootstrapped `with Create React App`, `TypeScript`, `eslint`, `styled-component`, `react testing library`.

What could be improved:
  - UI, animations;
  - Support for different ways of configuring the widget;
  - documentation;