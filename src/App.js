import './App.css';
import {useState} from "react";

function App() {
  const store = () =>{
    const list = JSON.parse(localStorage.getItem("ar"));
    if(list){
        return JSON.parse(localStorage.getItem("ar"));
    }
    else{
      return [];
    }
  }
 const [val, setval] = useState("");
const [ar , setarr] = useState(store());
localStorage.setItem("ar", JSON.stringify(ar));


function additem(){
  if(val === ""){
    return alert("please provide Value")
  }
     setarr([...ar , val]);
      setval("");
}

function remove(idx){
  ar.splice(idx, 1)
  console.log(ar);
  setarr(ar);
  
  localStorage.setItem("ar", JSON.stringify(ar));
}

  return (
    <div style={{backgroundColor:"#f5f5f5" , minHeight:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
   <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" , backgroundColor:"#fafafa", }}> 
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"20px"}}>
       <h2>Grocery Bud</h2>
       <div>
       <input style={{width:"292px" , backgroundColor:"#f7f9f7" , height:"25px"}} type="text" 
         value={val}
         onChange={(e)=> setval(e.target.value)}
       />
       <button style={{padding:"5px 20px", backgroundColor:"blue", color:"white", border:"null"}}
       onClick={additem}
       >Add Item</button>
       </div>
    </div>  

    {
      ar.map((item, idx) => 
      {
        return <div key={idx} style={{display:"flex", justifyContent:"space-between", width:"400px", marginTop:"10px"}}>
          <div>
            <input type="checkbox" />
            <label style={{margin:"20px"}}>{item}</label>
          </div>
          <div>
            <button onClick={(idx) => remove(idx)}>Delete</button>
          </div>
   
        </div>

      } )
    }

   </div> 
   </div>  
  );
}

export default App;
