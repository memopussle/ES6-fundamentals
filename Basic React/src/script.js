const element = React.createElement(
  "h1", //type
  {
    className: "title",
    onClick: () => {
      console.log("clicked"); //console.log clicked when a click fires
    },
    style: { fontFamily: "sans-serif", color: "rgb(255, 100, 100)" },
  }, //props
  "Hello World!" //children
);

ReactDOM.render(
  element,
  document.getElementById("root") //Container DOM node
);

//Retrieve Data from DOM
document.querySelectorAll(".button").forEach((domNode) => {
  // retrieve the message ID from the data attribute through the dataset property
  const messageId = parseInt(domNode.dataset.messageId);
  ReactDOM.render(
    React.createElement(
      "button",
      {
        onClick: () => {
          console.log(`liked message: ${messageId}`);
        },
      },
      "Like"
    ),
    domNode
  );
});

//JSX: we can write like HTML but with JS power
const intro = <h1>Hello World :)</h1>;
const name = "John";
const spanish = true;
const question = (
  <h1>
    {spanish ? "Hola" : "Hello"} {name}
  </h1>
);

//ie in JSX
const formulateGreeting = (user) => {
  let greeting;
  switch (user.language) {
    case "es":
      greeting = "hola";
      break;
    case "de":
      greeting = "hallo";
      break;
    default:
      greeting = "hello";
  }
  return (
    <h1 className="greeting">
      {`${greeting} ${user.firstName} ${user.lastName}`}
    </h1>
  );
};

const user = {
  language: "es",
  firstName: "Javier",
  lastName: "Bandela",
};

const greet = <h1>{formulateGreeting(user)}</h1>;

ReactDOM.render(
  greet,
  document.getElementById("root2") //Container DOM node
);

//React custom components
const Temperature = (props) => {
  console.log(props); //Object { degree: 25, unit: "celsius" }
  return (
    <h1>
      The current temperature is {props.degree} degree {props.unit}
    </h1>
  );
};

//degree, unit are attributes
const elementRender = <Temperature degree={25} unit="celsius" />; //<Temperature is a custom component

ReactDOM.render(
  elementRender,

  document.getElementById("root3")
);

// Adding state in a Rect component
//toLocaleString: retrieve the local time of the computer in a human readable format
const Clock1 = (props) => {
  return (
    <div>
      <h2>The time is {props.date.toLocaleString()}.</h2>
    </div>
  );
};

//passing new Date() object to data attributes
// ReactDOM.render(
//   <Clock1 date={new Date()} />,

//   document.getElementById("root3")
// );

//adding time by setInterval
const Clock2 = (props) => {
  return (
    <div>
      <h2>The time is {props.date.toLocaleString()}.</h2>
    </div>
  );
};

window.setInterval(() => {
  ReactDOM.render(
    <Clock2 date={new Date()} />,
    document.getElementById("root")
  );
}, 1000);

// ES6 objct constructor and extends : extends allows 1 object constructor to COPY over the properties and methods of another object constructor
//ES6 Class extends React.Component to inherit React Class component properties
//render method that returns an output
// new date() value is moved to state property object of Clock
//clock custom component inheritis all properties and methods from react.component

//state: property to store value that changes
//we can multiply properties to state
class Clock extends React.Component {
  //mounted state
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: "New York",
    }; // this is the component state property object
  }

  //method between mounted and live
  componentDidMount() {
    //execute every second
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  //run thismethod befoe component is removed from DOM
  componentWillUnmount() {
    //clear the interval right before Clock component is removed from DOM
    clearInterval(this.timer);
  }


  //this.setState is a React.Component method that lets us update the component state property
  updateTime() {
    this.setState({
      date: new Date(),
    });
  }

  //{location, date} replaces this.state
  render() {
    const { location, date } = this.state;
    return (
      <div>
        <h2>
          The time now is {date.toLocaleTimeString()} in {location}.
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root7"));


//Life cycle of a component
// we have 2 run 2 methods in between mount and unmount for updating clock:
//1. componentDidMount: set up an interva timer to update the value in the component state
//2. componentWillUnmount: clear the interval timer and stop it from running



//React counter Component
//1. defining a class componeny and initiate the state with a count property set to 0
class Counter extends React.Component {
  constructor(props) {
    super(props);

    // count value starts at 0

    this.state = { count: 0 };
    // This binding ensures `this` refers to the class object in the callback
    this.addCount = this.addCount.bind(this);
  }
  addCount(amount) {
    // add 1 to this.state.count

    this.setState({
      count: this.state.count + amount,
    });
  }

  render() {
    return (
      <div>
        <h2>Count {this.state.count}</h2>

        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(2)}>+2</button>
        <button onClick={() => this.addCount(3)}>+3</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,

  document.getElementById("root7")
);


//Prevent even Default: prevent the defaut behavior of the browser
const Link = () => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("Link clicked.");
  };

  return (
    <a href="altcademy.com" onClick={handleClick}>
      Click me
    </a>
  );
};

ReactDOM.render(
  <Link />,

  document.getElementById("root8")
);