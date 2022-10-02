# EHC---FOOD-DELIVERY-APP



 const [validation,setValidation] = useState(true)
  const [firstname,setfirstname] = useState(true)
  const[text,setText] = useState('')

  const showName = (e)=>{
    if(e.target.value.trim().length > 0){
      setValidation(true)
    }
    setText(e.target.value)
  }
  const addNameHandler = (e)=>{
    e.preventDefault();
    if(text.trim().length === 0){
      setValidation(false)
      return;
    }
    else{
      console.log(text)
    }
    setText('')
  }
  function nameHandler(){
    setfirstname(!firstname)
  }
  return(
    <div >
      <label >Firstname</label>
      <input type="text" onChange = {showName} value={text} className = {` text ${!validation ? "invalid" : "text"}`}></input>
      <button type="submit" onClick = {addNameHandler}>Add name</button>
      {!firstname && <p className = {`myText ${!firstname ? 'para' : ''}`}>queen</p>}
      < button onClick = {nameHandler}>remove</button>
    </div>
  )