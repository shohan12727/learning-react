import React, {useState} from "react";
function ArrayHandle () {
    const [foods,setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood (){
        const newFood = document.getElementById("foodInput").value //dhorlam
        document.getElementById("foodInput").value = " ";  // notun jaiga te pathalam 
        setFoods (f => [...f,newFood]); // add kore dilam 


    }

    function handleDeleteFood (index) {
        setFoods(foods.filter((_,i) => i !==index ));

    }



    return (
        <div className="food-contianer">
            <h2 className="uppor-line">List of Food</h2>
            <ul className="ul-list">
               {foods.map((food, index) => <li key={index} 
                                              onClick={() => handleDeleteFood(index) }    >{food}</li>)} 
            </ul>
            <input className="name-input" type="text" id="foodInput" placeholder="Enter your name"></input>
            <button className="btnn" onClick={handleAddFood}>Add Food</button>
        </div>

    )
}

export default ArrayHandle;