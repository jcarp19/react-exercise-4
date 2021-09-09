import React from 'react';
import './App.css';
import ArrayEx from './components/ArraysEx';


// const avengers = ["iron man", "captain america", "black widow"];

// example of how this works
// console.log(
//   avengers.map((hero, index) => index + ", " + hero)
// )

// function App() {
//   return (
//     <div className="App">
//       {avengers.map((hero, index) => <p key={index}>{hero}</p>)}
//     </div> //the word 'hero' above represents a single item in the array 'avengers'
//   );
// }

// const avengers = [
//   {name: "Tony Start", alias: "Iron Man"},
//   {name: "Bruce Banner", alias: "Hulk"},
//   {name: "Thor", alias: "Thor"}
// ];
// function App() {
//   return (
//     <div className="App">
//       {avengers.map((hero, index) => <p key={index}>{hero.alias} is {hero.name}</p>)}
//       {/* the word 'hero' above represents a single object in the 'avengers' array of objects */}
//       {/* or destructure the array like below */}
//       {avengers.map(({name, alias}, index) => <p key={index}>{alias} is {name}</p>)}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <ArrayEx />
    </div>
  );
}

export default App;
