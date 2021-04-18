# Intro to hooks

This app is meant to be used as a workshop for teaching react hooks. Worshop content is below, excercises can be done by running the app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

To get the app up and running, run:
```
npm install
npm start
```

This should start a server on localhost:3000.

The components we will be writing are in the toDo directory.

## What are hooks?

In the past, functional components in React could take props and manipulate them, but were otherwise fairly limited.
React hooks allow function components to have state, to use side effects, and become first-class citizens.

### Hooks are functions

At the end of the day, hooks are just functions. Any hook that returns a function is a closure over a function that you write. The closure
tells React when to run that function. Different types of hooks get called at different points in the [React lifecycle](https://reactjs.org/docs/react-component.html).

## Differences between functional and class components

- function components cannot access `componentDidMount`, `componentDidUpdate` or other lifecycle methods directly
- function components have no need for a constructor or state object
- functional components are generally shorter/faster to write, expecially for small components
- functional components use hooks to "hook in" to the react lifecycle. Hooks can't be used in class components.

## [Rules of hooks](https://reactjs.org/docs/hooks-rules.html)

1. Hooks can only be called at the top level of a component
    - do not call hooks from loops, if statements, or nested functions
    - hooks must be called in **exactly** the same order each time the component renders
1. Only call hooks from React functions
    - cannot be called from class components
    - can be called from custom hook functions
1. You can only have one version of React at a time
    - hooks can break if your app has multiple versions of React

### But Why?

In order to preserve state between re-renders of the component, React needs to create an object that persists outside of the component.
That persistent object is an array of "state cells" that store the values from the hook functions in the component. Because it's an array, the value that's preserved must be in the same location each time the function is called. If you had three `useState` hooks in a function, but one was conditionally rendered, then sometimes your third `useState` would get the wrong value! (OK, not really. Instead react or your linter will yell at you.)

### Deeper under the hood (further reading)

It can't just be an array, can it?? Well, no. Here are some resources that will give you a deeper dive into hooks.

- (About how closurse are used)[https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/]
- (About the data structure backing hooks)[https://the-guild.dev/blog/react-hooks-system]

## Destructuring syntax

This is a syntax you'll see a lot in hooks documentation and usage

### Array destructuring
```javascript
const answersArr = ['Yeah', 'Nah']
const [yes, no] = answersArr

// equivalent to
const yes = answersArr[0]
const no = answersArr[1]
```

### Object destructuring
```javascript
const fruitCounts = { apples: 2, bananas: 10 }
const { apples, bananas } = fruitCounts

// equivalent to
const apples = fruitCounts.apples
const bananas = fruitCounts.bananas
```

You can also do fun things like rename variables that were based on array keys or set defaults for variables that are undefined.
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Hooks!
Open up your app (by running `npm run start` if you haven't already), and let's learn about hooks.

### More resources
- (useState)[https://reactjs.org/docs/hooks-state.html]
- (useEffect)[https://reactjs.org/docs/hooks-effect.html]
- (useContext)[https://daveceddia.com/usecontext-hook/]

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
