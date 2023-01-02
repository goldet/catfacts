import React from "react";
import '../App.css'

function CatFact({fact, getCatFact}) {
    
    

    return (
      <div className="bg-sky-50 p-3 rounded"> 
        <p className="fact">{fact}</p>
        <button onClick={getCatFact} className="bg-blue-500 p-2 rounded">Click for cat fact</button>
        
      </div>
    );
  }


export default CatFact;