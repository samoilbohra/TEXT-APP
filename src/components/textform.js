import React ,{useState} from 'react'


 
export default function Textform(props) {
   const [text , setText] = useState('');
   const [words , setWords] = useState(0);
   const [character , setCharacter] = useState(0);

   const handleupClick =()=>{

    console.log('button was clicked');
    let newtext= text.toUpperCase();
    if(text !== '')
    {props.showAlert('success' , 'text  converted to Upper Case');}
    setText(newtext);
   
  }
  const handleloClick =()=>{

    console.log('button was clicked');
    let newtext= text.toLowerCase();

    setText(newtext);
    if(text !== '')
    {props.showAlert('success' , 'text  converted to lower Case');}
   
  }
  
  const handleOnChange =(event)=>{

    console.log('onChange clicked');
    setText(event.target.value);
    setCharacter(text.length);
    setWords(text.split(' ').length);
    // setText("abxdjkfasl kjjkfdsajl fdsjf adsjkld asfjk");
  }
  const handleCopy = () => {

    console.log(text)
    navigator.clipboard.writeText(text);
    console.log(text)
  if(text !== '')
    {props.showAlert('success' , 'text Copied');}
   
  }
  const handleClear = () => {
    
    setText("");
    if(text !== '')
    {props.showAlert('success' , 'text Cleared');}
   
  }
// setText('sadfiufaf');
  return (
    
    <div>
    <div>
 
<div class="mb-3"   style={{color :  props.mode ==='light'? 'black' : 'white' } }>
  <label for="exampleFormControlTextarea1" class="form-label"> {props.heading} </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="3"  style={{color :  props.mode ==='light'? 'black' : 'white' ,  backgroundColor: props.mode ==='light'? 'white' : '#212529'} }></textarea>
</div>
<button disabled={text.length===0} className={`mx-2 btn btn-${props.mode}` } style={{color :  props.mode ==='light'? 'black' : 'white' ,  backgroundColor: props.mode ==='light'? 'white' : '#212529'}} onClick={handleupClick} >convert to uppper Case</button>
<button disabled={text.length===0} className={`mx-2 btn btn-${props.mode}`} style={{color :  props.mode ==='light'? 'black' : 'white' ,  backgroundColor: props.mode ==='light'? 'white' : '#212529'} } onClick={handleloClick}>convert to lower Case</button>
<button  disabled={text.length===0} className={`mx-2 btn btn-${props.mode}`} style={{color :  props.mode ==='light'? 'black' : 'white' ,  backgroundColor: props.mode ==='light'? 'white' : '#212529'} } onClick={handleCopy}>Copy Text</button>
<button  disabled={text.length===0} className={`mx-2 btn btn-${props.mode}`} style={{color :  props.mode ==='light'? 'black' : 'white' ,  backgroundColor: props.mode ==='light'? 'white' : '#212529'} } onClick={handleClear}>Clear Text</button>
   
    </div>

    <div style={{color :  props.mode ==='light'? 'black' : 'white'}}> 
    <h1> your string summary</h1>
    <p> your given string has {text.split(/\s+/).filter((element) => {return element.length!==0}).length  } words and {text.length } characters </p>
    </div>

    <div style={{color :  props.mode ==='light'? 'black' : 'white'}}> 
    <h2> Preview</h2>
    <p>{text} </p>
    </div>
    </div>
    
  )
}
