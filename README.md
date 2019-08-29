This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview of Lecture

This lecture is designed to show students basic tools that can be used to develop mobile-first web pages. This code relies on a [different github repo](https://github.com/NickyEXE/student_hunter_backend) for its backend.

## SWBATs
* Develop in preview mode in the Chrome Dev Tools
* Understand the various tools for determining and conditionally rendering for mobile
* Connect their mobile devices using the dev tools and access their console
* Set a cookie on their website manually using the console.
* Use ngrok to access development ports without plugging in
* Track a fellow student who has their webpage open to "localhost:3000/" with a cookie "friend" using Google Maps

## Things to Note

This code is meant for development mode only and there's a couple of weird knacks to how it works. 

* It requires a Google API key as an environmental variable. Run `REACT_APP_NOT_SECRET_CODE=YOUR_API_KEY_FOR_GOOGLE_MAPS_JAVASCRIPT_HERE npm start` to start the app, with your API key substituted in.
* The "runner" user will need "friend" stored as a cookie in order to begin uploading their location data to the backend
* It assumes you will set up an ngrok with two ports open -- one linking to the react frontend and one linking to the [rails backend](https://github.com/NickyEXE/student_hunter_backend).

## Lecture Structure (Spoilers for Students)

This app, when completed (it will have a completed "master" branch and a "lesson" branch with incomplete code to build out), will allow all students on the '/hunter' path to follow a student who has previously left the building on the 'runner' path using an ngrok url. 

Given that they're on development server, the lecturer will be able to send both parties messages simply by updating the code and saving.

To do this, the lecturer will have to provide the runner student with a device with to-sleep power saver features turned off and with a cookie stored on the page that's simply the string "friend".










In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [https://da1ca9cb.ngrok.io](https://da1ca9cb.ngrok.io) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# student_hunter_frontend
