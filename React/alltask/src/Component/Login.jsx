import React, { useContext, useState } from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [user,setUser]=useState({});
  const {flag,setFlag}= useContext(AuthContext);

  

  const handleChange = (e)=>{
    const {name,value}=e.target;
    setUser({
       ...user,
       [name]:value
    })
  }

  const handleClick = ()=>{
        console.log(user);
        let usersData = localStorage.getItem('users');
              if(usersData){
                  let newArray = localStorage.getItem('users');
                  newArray= JSON.parse(newArray);
                  console.log(newArray);
                  let filterArray = newArray.filter((index)=>{
                       if(index.email==user.email && index.pwd == user.pwd){
                           return index;
                       }
                  })
                  console.log("fill",filterArray);
                  
                 if(filterArray.length>0){
                      alert("Logged In!");
                      setFlag(1)
                      localStorage.setItem('session-user',JSON.stringify(filterArray[0]))
                      $('#exampleModalToggle').modal('hide')
                      navigate('/home')
                 }
                 else{
                     alert("Login fail")
                 }
                }       
    }
  return (
    <div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='pwd'onChange={handleChange}/>
  </div>
 
  <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">New Registraion</button>
      </div>
    </div>
  </div>
</div>
<Register />
<button class="btn bg-white text-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>

   </div>  )
}

export default Login