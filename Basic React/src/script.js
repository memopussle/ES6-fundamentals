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
document.querySelectorAll(".button").forEach(domNode => {
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
})


//JSX: we can write like HTML but with JS power
const intro = <h1>Hello World :)</h1>;
const name = "John"; 
const spanish = true;
const question = <h1>{spanish ? "Hola" : "Hello"} {name}</h1>


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
  <h1 className ="greeting">
    
    {`${greeting} ${user.firstName} ${user.lastName}`}
  </h1>
  )


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
}

//degree, unit are attributes
const elementRender = <Temperature degree={25} unit="celsius"/> //<Temperature is a custom component

ReactDOM.render(
  elementRender,

  document.getElementById("root3")
);