# Intro to hooks

This app is meant to be used as a workshop for teaching react hooks. Workshop content is below, excercises can be done by running the app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
Some experience with React. You should know about the component lifecycle, lifecycle methods, etc.

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
In object destructuring, the name of the variable being assigned to must be the same as the key of the object.

```javascript
const fruitCounts = { apples: 2, bananas: 10 }
const { apples, bananas } = fruitCounts

// equivalent to
const apples = fruitCounts.apples
const bananas = fruitCounts.bananas
```

You can also do fun things like rename variables that were based on array keys or set defaults for variables that are undefined.
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## [useState](https://reactjs.org/docs/hooks-state.html)

This hook does what it says on the tin, it adds state to a previously stateless component.
Suppose I have a component that contains a button, now I want to keep track of how many times that button has been clicked.

Before hooks, we would have had to convert the button component that needed state into a class component. Now, we can use the `useState` hook.

### Where to use it

Any functional component that needs to preserve some state through rerenders.
`useState` can be called multiple times in one function, and is generally used multiple times rather than using an object as you might in a
class component. When this becomes unwieldy, I often turn to `useReducer`.

### Arguments

`useState` takes one argument, an initial state. That initial state can be of any type; a string, a number, an object, and array, etc.

### Return value

`useState` returns an array of two values: first, the current state, and second, a setter that can set the next state.
Usually, destructuring syntax is used to give these values useful names, i.e. `[dogName, setDogName] = useState('Fluffy')` would give us a
variable `dogName` which would initially be set to `'Fluffy'`, and a function, `setDogName` that can be used to change the value of `dogName`.

`setDogName` can take either a value, which will set the state to that value when the component rerenders, or a function, which receives the
previous state, so that that state can be used to set the new value.

So if I want to change the dog's name directly, I would call `setState('Floofster')`, but if I need to keep track of the previous value, I
would use `setState((prevDogName) => prevDogName + 'Jr.')`.

### Exercise

Open up your app (by running `npm run start` if you haven't already), and let's complete the `useState` example.
The file to work on is `src/toDo/KittenVotes.jsx`.

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
You can still use hooks without knowing what's under there.

- [About how closure are used](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)
- [About the data structure backing hooks](https://the-guild.dev/blog/react-hooks-system)


## [useEffect](https://reactjs.org/docs/hooks-effect.html)

Suppose we need our component to make an API call in order to set it's state? That's where `useEffect` comes in handy.

### Where to use it

When your component needs side effects to happen on mount or on update.

### Arguments

`useEffect` takes two arguments, a function that will be run when the component mounts, and an array of values, which tells React when (or if) the function should be run when the component updates.

#### The function argument

The function that is passed to `useEffect` can do any side effect. The most common usage that I've seen for calling an API and setting state as a
result of that API call.

##### Cleanup

Optionally, the function you pass to useEffect can return a cleanup function. This is very similar to something that might get run on `componentWillUnmount`. So, if you're calling an API, it might prevent the API from setting state after the component is unmounted. If you
have subscribed to a service, it might unsubscribe you.

#### The array argument

This is an array of values, and if any one of the values in the array changes, React will call the function you passed to `useEffect`. If you
only want the effect to run on mount, you can pass it an empty array. If there are props or state which affect your `useEffect` function, you can add them to the array, and the function you passed to `useEffect` will be called if the component updates and one of those values changed, similar to logic you might put in `componentDidUpdate`.

### Return value
`useEffect` has no return value.

### Exercise
The code for the example is in `src/examples/MovieFacts.jsx`.
The code for you to finish is in `src/toDo/GhibliMovies.jsx`.

## [useContext](https://daveceddia.com/usecontext-hook/)
What if I had some state in one component, but I now want to share it accross multiple components or multiple parts of my app?
This is where `useContext` becomes useful. Instead of moving state up the component tree and drilling down props, we can move state into a
context and access it via the `useContext` hook.

So, if I want to create an app where on one page I report the amount of cookies I've eaten, and on another page I can click on cookies to add to
the cookie count, I could wrap both components in a context provider and use the `useContext` hook to access the shared state.

### Creating context
A context is created using `React.createContext()`.
If we're creating a context that keeps track of the number of cookies I've eaten, I could create it like so:
`const CookieContext = React.createContext()`.

### The context provider
The context provider is the component that holds whatever values you need it to and makes them available to it's child components.
My cookie context is going to provide a getter and setter for my cookie count to various components. It's a special type of React component that returns a Provider that is part of the CookieContext. It takes a `value` prop. This value can be any value that you want the children to have
access to. In this case, we're just going to pass the values we got from `useState`.

```javascript
const CookieProvider = ({ children }) => {
  const [cookieCount, setCookieCount] = useState(0)

  return (
    <CookieContext.Provider value={[cookieCount, setCookieCount]}>
      {children}
    </CookieContext.Provider>
  )
}
```

### Consuming context
To use the context, children must use the `useContext` hook. So, a component that reports the cookie count might look like:
```javascript
const CookieNumber = () => {
  const [cookieCount] = useContext(CookieContext)
  return <div>I ate {cookieCount} cookies!</div>
}
```

### Code-Along
We'll do a context example together. It's in `src/toDo/TwoButtons.jsx`.

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
