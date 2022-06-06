# Basic react

### How to install

**1. Create react app through npm**
```
npx create-react-app my-app
cd m-app
npm install
npm start
```

**2.Adding React libraries to the head of HTML through CDNS**

---

## React example

1. React accepts 3 inputs: type, props and children. 

- type: tag name ("div","span","h1")
- props: an object properties
- children: child elements you to be nested inside the element

2. ReactDOM.render accepts two inputs: react element and container reference to inject the element


```
const element = React.createElement(
  'h1', //type
  {className: 'title'}, //props
  'Hello World!' //children
);

ReactDOM.render(
  element,
  document.getElementById('root') // Container DOM node
);
```

### Using same component in multiple places

```
ReactDOM.render(
  element,
  document.getElementById('root2')
);
```

---

## React JSX

- Jsx is developed to write react elements faster

```
const element = React.createElement(
  'h1',
  {},
  'Hello World!'
);
```

change to

```
const element = <h1>Helo World!</h1>;
```

- Browsers arenot cable of understanding JSX -> add following tag to your HTML head element

```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

- And add type attribute so compiler knows it needs to be translated

```
<script type="text/babel" src="script.js"></script>
```

### Styling

- className replaces class

- To write inline styles, we use {{}} 

```
 return (
    <h1
      className="greeting"
      style={{ color: 'yellow' }}
    >
    Hello my friend
    </h1>
  );
```

### Custom components

- A custom component is a JS function that accepts inputs ( props in React terminology) and return a user interface output using JSX.

- The attribute degree={25} is passed to the Temperature function under the props object

```
const Temperature = (props) => {
  return <h1>The current temperature is {props.degree}</h1>;
}

const elementRender = <Temperature degree={25} /> //<Temperature is a custom component

```

- Impure function will not  be allowed as a React component
```
const add = (total, value) => {
  total += value;
}; //example of impure function
```