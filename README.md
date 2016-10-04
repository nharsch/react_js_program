
http://courses.reactjsprogram.com/courses/reactjsfundamentals/

# Starting dev server

# Course Notes

## Imperative vs Declarative
  - how vs what
  - declarative reduces side effects
  - minimilizes mutability
  - more readable code
  - less bugs
  - rect more declarative than jquery

## Explicit Mutations
  - explicity call setState

## Tooling
  - NPM
    - --save-dev
      - dev dependencies
  - React Router
    - map components to URLs
  - Babel
    - transpiler
  - Webpack
    - bundler
    - 1) Webpack needs to know the starting point of your application, or your root JavaScript file.
    - 2) Webpack needs to know which transformations to make on your code.
    - 3) Webpack needs to know to which location it should save the new transformed code.

## First React Component
  - every react component requires a render function
  - reg functions return data
  - react functions should return UI
## F.I.R.S.T.
  - react components should be
    - Focused
    - Independent
    - Reusable
    - Small
    - Testable

## this.props.children
  - what ever is in between opening and closing ocmponents

## react router
  - declarative way to create routes in app
  - comment gotcha = {/* child comment, put {} around */}
  - IndexRoute
    - loads by default if no other route is selected

## Container vs Presentational Components, PropTypes, and Stateless Functional Components 
  - Stateless Functional Components
    - components with just a render method
    - just use plain functions for Stateless functional components
  - PropTypes
  - Context
    - a way to get state that isn't passed down
    - mostly just use for routes
## Life Cycle Events and Conditional Rendering
  - Life Cycle Events
    - Mounting and Unmounting
      - called only once

## **'this'** keyword

'this' allows to use the same function with different contexts

always look for where function was invoked

### 4 Rules

#### Implicit Binding

Most common rule

look to the left of function invocation to get object 'this' is 
referencing

#### Explicit Binding
call, apply, bind

every function has a `.call()` function that allows us
to call the function with a given context

`someFun.call(someObj);`

`.apply(thisArg, [argsArray])` will call function with first arg as this and 
the second arg as array like obj of args

`.bind()` like .call, except doesnt' invoke function, but returns a function 
that can be called later

#### new Binding

`.new()` creates instance of a user-defined object type

#### window Binding

`this` can default to window object if not in strict mode

## Axios, Promises, Github API

### .bind

`obj1.bind(obj2)` will make obj1.this == obj2

## Rendering UI in react


