# Preface
Creating React App means you start scripting with JSX which looks like this:
```JSX
ReactDOM.render(
    <HelloMessage name="Taylor Swift" />,
    document.getElementsByTagName('body')[0]
);
```

1. First you need convert JSX to ES-script because JSX is just a _funny tag syntax_.
2. Then you will convert ES-script to browser-compatible JS.
3. Now you can execute .js file in your browser 

# Install
First you need install all packages specified in "package.json"
- `npm i` 

That's all  

# The hard way
JSX &rarr; ES6
- `node node_modules/.bin/babel src -d lib`
Will generate ES files in **lib/** directory

ES6 &rarr; Native
- `npx webpack --config webpack.config.js`

Will generate `/dist/main.js` for including

# The shortest way

- `npm run build && npm run pack`