var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var element = React.createElement("h1", //type
{
  className: "title",
  onClick: function onClick() {
    console.log("clicked"); //console.log clicked when a click fires
  },
  style: { fontFamily: "sans-serif", color: "rgb(255, 100, 100)" }
}, //props
"Hello World!" //children
);

ReactDOM.render(element, document.getElementById("root") //Container DOM node
);

//Retrieve Data from DOM
document.querySelectorAll(".button").forEach(function (domNode) {
  // retrieve the message ID from the data attribute through the dataset property
  var messageId = parseInt(domNode.dataset.messageId);
  ReactDOM.render(React.createElement("button", {
    onClick: function onClick() {
      console.log("liked message: " + messageId);
    }
  }, "Like"), domNode);
});

//JSX: we can write like HTML but with JS power
var intro = React.createElement(
  "h1",
  null,
  "Hello World :)"
);
var name = "John";
var spanish = true;
var question = React.createElement(
  "h1",
  null,
  spanish ? "Hola" : "Hello",
  " ",
  name
);

//ie in JSX
var formulateGreeting = function formulateGreeting(user) {
  var greeting = void 0;
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
  return React.createElement(
    "h1",
    { className: "greeting" },
    greeting + " " + user.firstName + " " + user.lastName
  );
};

var user = {
  language: "es",
  firstName: "Javier",
  lastName: "Bandela"
};

var greet = React.createElement(
  "h1",
  null,
  formulateGreeting(user)
);

ReactDOM.render(greet, document.getElementById("root2") //Container DOM node
);

//React custom components
var Temperature = function Temperature(props) {
  console.log(props); //Object { degree: 25, unit: "celsius" }
  return React.createElement(
    "h1",
    null,
    "The current temperature is ",
    props.degree,
    " degree ",
    props.unit
  );
};

//degree, unit are attributes
var elementRender = React.createElement(Temperature, { degree: 25, unit: "celsius" }); //<Temperature is a custom component

ReactDOM.render(elementRender, document.getElementById("root3"));

// Adding state in a Rect component
//toLocaleString: retrieve the local time of the computer in a human readable format
var Clock1 = function Clock1(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "The time is ",
      props.date.toLocaleString(),
      "."
    )
  );
};

//passing new Date() object to data attributes
// ReactDOM.render(
//   <Clock1 date={new Date()} />,

//   document.getElementById("root3")
// );

//adding time by setInterval
var Clock2 = function Clock2(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "The time is ",
      props.date.toLocaleString(),
      "."
    )
  );
};

window.setInterval(function () {
  ReactDOM.render(React.createElement(Clock2, { date: new Date() }), document.getElementById("root"));
}, 1000);

// ES6 objct constructor and extends : extends allows 1 object constructor to COPY over the properties and methods of another object constructor
//ES6 Class extends React.Component to inherit React Class component properties
//render method that returns an output
// new date() value is moved to state property object of Clock
//clock custom component inheritis all properties and methods from react.component

//state: property to store value that changes
//we can multiply properties to state

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  //mounted state
  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      date: new Date(),
      location: "New York"
    }; // this is the component state property object
    return _this;
  }

  //method between mounted and live


  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //execute every second
      this.timer = setInterval(function () {
        return _this2.updateTime();
      }, 1000);
    }

    //run thismethod befoe component is removed from DOM

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      //clear the interval right before Clock component is removed from DOM
      clearInterval(this.timer);
    }

    //this.setState is a React.Component method that lets us update the component state property

  }, {
    key: "updateTime",
    value: function updateTime() {
      this.setState({
        date: new Date()
      });
    }

    //{location, date} replaces this.state

  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          location = _state.location,
          date = _state.date;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "The time now is ",
          date.toLocaleTimeString(),
          " in ",
          location,
          "."
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById("root7"));

//Life cycle of a component
// we have 2 run 2 methods in between mount and unmount for updating clock:
//1. componentDidMount: set up an interva timer to update the value in the component state
//2. componentWillUnmount: clear the interval timer and stop it from running


//React counter Component
//1. defining a class componeny and initiate the state with a count property set to 0

var Counter = function (_React$Component2) {
  _inherits(Counter, _React$Component2);

  function Counter(props) {
    _classCallCheck(this, Counter);

    //counter value starts at 0
    var _this3 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this3.state = { count: 0 };
    return _this3;
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Couunt ",
          this.state.count
        ),
        React.createElement(
          "button",
          null,
          "+1"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("root8"));