
import React, {useState} from "react";
function MyComponent () {
    const [car,setCar] = useState({
        year:2024,
        make:"Ford",
        model:"mustang"
    });

    function handleYearChange (event) {
        setCar(c => ({...c, year: event.target.value}));
        
    }
    function handleMakeChange (event) {
        setCar( c => ({...c, make: event.target.value}));

    }
    function handleModelChange (event) {
        setCar ( c => ({...c, model: event.target.value}));

    }
    
    return(
        <div className="car-container">
            <p className="title-container">Your favourite car is : {car.year} {car.make} {car.model}
            </p>
            <input className="year-input-container" type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input className="make-input-container" type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input className="model-input-container" type="ntext" value={car.model} onChange={handleModelChange} />
        </div>

    );


}
export default MyComponent;

