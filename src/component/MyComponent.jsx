
import React, {useState} from "react";
function MyComponent () {
    const [car,Setcar] = useState({
        year:2024,
        make:"Ford",
        model:"mustang"
    });
    


    return(
        <div>
            <p>Your favourite car is : {car.year}
                                       {car.make}
                                       {car.model}
            </p>
        </div>

    );


}
export default MyComponent;

