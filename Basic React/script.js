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