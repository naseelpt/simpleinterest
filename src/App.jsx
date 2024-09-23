
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle,setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [interest,setInterest]=useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate=(e)=>{
    console.log(e.target.name);
    
    console.log(e.target.value);

    console.log();
    

    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }
    }
    else{
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(false)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(false)
      }
      else{
        setYear(e.target.value)
        setIsYear(false)
      }
      }

      

    
    
    
  }
  const handleReset = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  
  const handleCalculate=()=>{
    setInterest((principle*rate*year)/100)
  }
  
  

  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-item-center'>
      <div style={{width:'500px',}} className='p-5 bg-light rounded '>
        <h1>simple intrest app </h1>
        <p>calculate your simple interest easily</p>
        <div style={{height:'150px'}} className='bg-warning  d-flex justify-content-center align-item-center flex-column rounded text-center'> 
          <h1>₹{interest} </h1>
          <p>totel simple interest</p>
        </div>
        <div className='my-3'>
        <TextField name='principle' id="outlined-basic" value={principle} label="principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>{!isPrinciple && <span className='text-danger'>*inavlid input</span> }
        </div>
        <div className='my-3'>
        <TextField name='rate' id="outlined-basic" value={rate} label="rate of interest (p.a)%" variant="outlined"  className='w-100' onChange={(e)=>validate(e)} />{!isRate && <span className='text-danger'>*inavlid input</span> }
        </div>
        <div className='my-3'>
        <TextField name='year' id="outlined-basic" value={year} label="year" variant="outlined"  className='w-100' onChange={(e)=>validate(e)} />{!isYear && <span className='text-danger'>*inavlid input</span> }
        </div>

        <div className="mb-3 d-flex justify-content-between">
        <Button style={{width:'190px', height:'60px'}} variant="contained" color="success" onClick={handleCalculate}>calculate</Button>
        <Button style={{width:'190px', height:'60px'}} variant="outlined" onClick={handleReset}>Outlined</Button>
        </div>
        
       
      </div>
    </div>
    
      
    </>
  )
}

export default App
