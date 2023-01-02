import { useState } from "react";
import CatFact from "./CatFact";


//why would you use a handleloadingstate prop here?
function DisplayCard() {
  //cat fact state
  const [catFact, setCatFact] = useState("Click button to generate a random cat fact!");
  //loading state
  const [isLoading, setIsLoading] = useState(false);
 
  //function to getCatFact 

  //function that waits for search before doing something
  async function getCatFact() {
    //loading until info is gotten 
  setIsLoading(true);
    
  
    const response = await fetch("https://catfact.ninja/fact?max_length=140", {
    method: 'GET',
    mode: 'cors', 
    });
    
    //converts api info from json to javascript 
    const facts = await response.json(); 

    //updates state with new fact from cat fact api 
    setCatFact(facts.fact);
    //set is loading to false when finished 
    setIsLoading(false); 
    }
 

  return (
     <div className="w-2/4 m-auto ">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CatFact getCatFact={getCatFact} fact={catFact}/>
      )}
    </div>
  );
}

export default DisplayCard;
