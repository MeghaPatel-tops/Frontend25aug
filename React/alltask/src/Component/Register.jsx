import React, { useEffect, useState } from 'react'

function Register() {
    const [user,setUser]=useState({
        username:"",
        email:"",
        pwd:"",
    });
    const [flag,setFlag]= useState(0);

   
    const [msg,setMsg]=useState([]);

   
      function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
        }

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })  
    }


    const handlePWD = (e)=>{
           const {name,value}=e.target;
            if(/^(?=.*[a-z])/.test(value)== true){
                  document.getElementById('pid-2').style.color="green";
                  
               }
              if(/(?=.*[A-Z])/.test(value)== true){
                  document.getElementById('pid-1').style.color="green";

               }
               if(/(?=.*\d)/.test(value)== true){
                  document.getElementById('pid-3').style.color="green";
               }
             if(/^(?=.*[@$!%*?&])/.test(value)== true){
                  document.getElementById('pid-4').style.color="green";
               }
            if(value.length >=8){
                    document.getElementById('pid-5').style.color="green";
               }
           setUser({
               ...user,
               [name]:value
           })
    }

     useEffect(()=>{
           setMsg(msg)
    },[])
    const handleClick= ()=>{
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
      console.log(regex.test(user.pwd));
      
         
            if(user.username==""){
                setMsg([...msg,"Enter Valid Username"])
                return false
                
            }
            
            else if(user.email == "" && !validateEmail(user.email) ){
                setMsg([...msg,"Enter valid Email"]);
                 return false
            }
            else if( ! regex.test(user.pwd)){
                  setMsg([...msg,"Enter valid password"]);
                  return false
            }
            else{
              setMsg([])
              let usersData = localStorage.getItem('users');
              if(usersData){
                  let newArray = localStorage.getItem('users');
                  newArray= JSON.parse(newArray);
                  console.log(newArray);
                  let filterArray = newArray.filter((index)=>{
                       if(index.email==user.email){
                           return index;
                       }
                  })
                  console.log("fill",filterArray);
                  
                 if(filterArray.length>0){
                      alert("Email already exist")
                      return false
                 }
                 else{
                     newArray.push(user);
                       localStorage.setItem('users',JSON.stringify(newArray))
                 }
              }
              else{
                 let usersArray = [user]
                localStorage.setItem('users',JSON.stringify(usersArray))
              }
             
            }
    }

    const displayError=()=>{
          setFlag(1)
    }
  return (
    <div>
    
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Registraion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         {
         (msg.length > 0)?
        <div class="alert alert-secondary" role="alert">
                   {
                      msg && msg.map((index,i)=>(
                        <p>{index}</p>
                      ))
                   }
                </div> :''  }
           <form>

             <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username"  onChange={handleChange}/>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="pwd" onChange={handlePWD} onFocus={displayError} />
  </div>
    <div style={{color:"red",display: flag==1 ? 'block':'none'}} >
          <p id="pid-1">A-Z</p>
          <p id="pid-2">a-z</p>
          <p id="pid-3">0-9</p>
          <p id="pid-4">Special char</p>
          <p id="pid-5">Max char greter 8</p>
    </div>
  <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register