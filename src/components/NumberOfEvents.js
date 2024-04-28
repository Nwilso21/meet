import { useState } from "react";

const NumberOfEvents =({setCurrentNOE,setErrorAlert})=>{
    const [query, setQuery] = useState("32");
    const handleInputChanged =(event)=>{
       const value = event.target.value;
        setQuery(value);
        let text;
        if(!isNaN(value)  && value>0)
        {
            setCurrentNOE(value);
        }else{
            text="Only use positive integers";
            setErrorAlert(text);
        }
    }
    return(
        <div id="number-of-events">
            <input type="text" className="textboxNumber" 
            placeholder="Enter a number"
            value={query}
            onChange={handleInputChanged}
            />
        </div>
    )
}
export default NumberOfEvents;