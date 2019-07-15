import React from "react";

import "./App.css";

const App = x => {
  const user = {
    name: "Andrew",
    cities: ["Phillie", "NYC"],
    printPlaceLived() {
      return this.cities.map(city => this.name + " has lived in " + city + " ");
    }
  };
  return <div>{user.printPlaceLived()}</div>;
};


export default App;
