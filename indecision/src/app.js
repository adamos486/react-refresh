console.log("App.js is running");

const user = {
  name: "Adam Cobb",
  age: 30,
  location: "San Francisco"
};

//only render the subtitle if exists. logical and
//create a brand new property: options, array of string options.

const displayChunk = {
  title: "Some annoying title",
  subTitle: "Some annoying other title",
  options: ["Properties", "Sales", "Escrow", "Underwriting"]
};

function populateOptions(options) {
  return options.map(option => {
    return (
      <li
        style={{
          cursor: "pointer"
        }}
        key={option}
        onClick={e => {
          e.preventDefault();
          clickOption(option);
        }}
      >
        {option}
      </li>
    );
  });
}

function clickOption(option) {
  console.log("Option clicked:", option);
}

function checkForOptions(options) {
  if (options && options.length > 0) {
    return (
      <div>
        <h4>Here are your options:</h4>
        <ul>{populateOptions(options)}</ul>
      </div>
    );
  }
}

function checkSubtitle(subtitle) {
  if (subtitle && subtitle.length > 0) {
    return <p>{subtitle}</p>;
  }
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

function getName(name) {
  if (name) {
    return <h1>{name}</h1>;
  }
}

function getAge(age) {
  if (age) {
    return <p>Age: {age}</p>;
  }
}

const otherTemplate = (
  <div>
    {getName(user.name)}
    {getAge(user.age)}
    {user.location && getLocation(user.location)}
  </div>
);

const template = (
  <div>
    <h1>{displayChunk.title}</h1>
    {checkSubtitle(displayChunk.subTitle)}
    {checkForOptions(displayChunk.options)}
    {otherTemplate}
  </div>
);

const app = document.getElementById("app");

ReactDOM.render(template, app);
