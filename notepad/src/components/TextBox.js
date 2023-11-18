import React,{useState} from 'react'

export default function TextBox() {
    const handleupClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclClick = ()=>{
        console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleonCahnge = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
    <>
    <h1 className="text-center">Enter Text below</h1>

    <form>
    <div class="mb-3">
        <textarea class="form-control" value = {text} onChange={handleonCahnge} id="myBox" rows="10"></textarea>
    </div>
    <button type="button" class="btn btn-success mx-2" onClick={handleupClick}>Convert to Uppercase</button>
    <button type="button" class="btn btn-success mx-2" onClick={handleloClick}>Convert to Lowercase</button>
    <button type="button" class="btn btn-success mx-2" onClick={handleclClick}>Clear</button>


    </form>

    </>
  )
}
  
