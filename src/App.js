import DriverList from "./components/DriverList";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  const [drivers, setDrivers] = useState([
    {
      id: 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
    },
    {
      id: 1,
      name: "Carlos Sainz",
      team: "Ferrari",
      country: "Spain",
      handsome: true,
    },
  ]);

  const flipHandsome = (id) => {
    console.log("flipHandsome called");
    console.log(id);
    const newDrivers = [];
    for (const d of drivers) {
      const driver = { ...d };
      if (driver.id === id) {
        driver.handsome = !driver.handsome;
      }
      newDrivers.push(driver);
    }
    setDrivers(newDrivers);
  };

  const deleteDriver = (id) => {
    console.log("Delete called");
    const newDrivers = [];
    for (const d of drivers) {
      const driver = { ...d };
      if (driver.id !== id) {
        newDrivers.push(driver);
      }
    }
    setDrivers(newDrivers);
  };

  return (
    <div className="App">
      {/* <h1>Drivers</h1>
      <Driver></Driver>
      <Driver /> */}
      <DriverList
        drivers={drivers}
        handsomeCallback={flipHandsome}
        deleteCallback={deleteDriver}
      />
    </div>
  );
}

export default App;
