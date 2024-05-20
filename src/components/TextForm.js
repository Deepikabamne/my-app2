import React, {useState} from 'react'; 

export default function useTextForm(props) {
  const handleUpclick=() =>{
   let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
   }
   const handleLoclick=() =>{
   let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
   }
   const handleClearclick=() =>{
    let newText = '';
     setText(newText);
     props.showAlert("cleared text", "success");
    }
   const handleOnChanged=(event) =>{
    setText(event.target.value);
   }
   const handletextCopy=() =>{
   var text = document.getElementById('myBox');
   text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("copy to clipboard", "success");
   }
   const removeextraspc=() =>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("removed extra space", "success");
    }
  const [text, setText] = useState('');
  // text="new text;" wrong
  // setText("new text"); correct
  return (
    <div>
      <div className='container' style= {{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style= {{backgroundColor: props.mode==='dark'?'#979292':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChanged} id="myBox" rows="8"></textarea>
    </div>
  <button className='btn btn-primary mx-1' onClick={handleUpclick}>Conver to Uppercase</button>
  <button className='btn btn-primary mx-1' onClick={handleLoclick}>Conver to Lowercase</button>
  <button className='btn btn-primary mx-1' onClick={handleClearclick}>Clear Text</button>
  <button className='btn btn-primary mx-1' onClick={handletextCopy}>Copy Text</button>
  <button className='btn btn-primary mx-1' onClick={removeextraspc}>remove extra space</button>

  </div>
  <div className='container' style= {{color: props.mode==='dark'?'white':'black'}}>
<h1>text your summery</h1>
<p> words {text.split(" ").length} and characters {text.length}</p>
<p> words {0.008* text.split(" ").length} minuts read</p>
<h2>sentance</h2>
<p>{text.split(/[.?!]/g).filter(Boolean).length}</p>
<h2>preview</h2>
<p>{text.length>0?text:'Enter you text'}</p>
  </div>
  </div>
  )
}
