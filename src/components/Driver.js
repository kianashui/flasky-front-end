import "./Driver.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
  // const [handsome, setHandsome] = useState(props.handsome);
  // const [country, setCountry] = useState(props.country);
  // const flipHandsomeness = () => {
  //   if (handsome) {
  //     //handsome = false; //NO DON'T DO THIS. use setHandsome
  //     setHandsome(false);
  //   } else {
  //     setHandsome(true);
  //   }
  // };

  // const changeCountryName = (event) => {
  //   setCountry(event.target.value);
  // };
  // return (
  //   <div className="App">
  //     <h2 className="driver__name">{props.name}</h2>
  //     <ul>
  //       <li>Team: {props.team}</li>
  //       <li>Country: {country}</li>
  //       <li>Handsome: {props.handsome.toString()}</li>
  //       <li>Handsome: {handsome ? "Hella fine" : "Not for me"}</li>
  //       <button onClick={flipHandsomeness}>Change Handsomeness</button>
  //       <input
  //         type="text"
  //         placeholder="Set Country" //this line isn't necessary
  //         value={country}
  //         onChange={changeCountryName}
  //         // another way to do this with one line without needing to declare the changeCountryName function
  //         // onChange={(event) => setCountry(event.target.value);}
  //       ></input>
  //     </ul>
  //   </div>
  // );

  const flipMyHandsome = () => {
    props.handsomeCallback(props.id);
  };

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };

  return (
    <div className="App">
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Cars: {props.cars}</li>
        <li>Handsome: {props.handsome.toString()}</li>
        <li>Handsome: {props.handsome ? "Hella fine" : "Not for me"}</li>
        <button onClick={flipMyHandsome}>Change Handsomeness</button>
        <button onClick={deleteMe}>Delete</button>
        <input
          type="text"
          placeholder="Set Country" //this line isn't necessary
          // value={country}
          // onChange={changeCountryName}
          // another way to do this with one line without needing to declare the changeCountryName function
          // onChange={(event) => setCountry(event.target.value);}
        ></input>
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  cars: PropTypes.array.isRequired,
};

export default Driver;
