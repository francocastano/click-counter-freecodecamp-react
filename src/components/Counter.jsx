import React from "react";
import '../stylesheet/Counter.css'

function Counter({ numClics }){
    return(
        <div className="counter">
            {numClics}
        </div>
    )
}

export default Counter