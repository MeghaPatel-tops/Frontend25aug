document.getElementById('regBtn').addEventListener('click',function(e){
   
    e.preventDefault();
    //document.getElementById('exampleModalLogin').hide();
     const modalEl = document.getElementById('exampleModalLogin');
    const modal = bootstrap.Modal.getInstance(modalEl);
     modal.hide();
 let email = document.getElementById('regEmail').value;
    let user1={
        username:document.getElementById('regUsername').value,
        email:document.getElementById('regEmail').value,
        pwd:document.getElementById('regPwd').value,
    }
    
   
      let users;
    if(localStorage.getItem('users')){
          users = JSON.parse(localStorage.getItem('users'));
        console.log(users);
        users.push(user1);
    }
    else{
           users=[user1]
    }

    localStorage.setItem("users",JSON.stringify(users))
    const modalReg = document.getElementById('exampleModalReg');
    const modalReg1 = bootstrap.Modal.getInstance(modalReg);
    modalReg1.hide();
   
})

//======================================= Login code=============================
document.getElementById('loginbtn').addEventListener('click',function(e){
    e.preventDefault();
    let loginData={
        email:document.getElementById('loginemail').value,
        pwd:document.getElementById('loginpwd').value
    }
    let usersArray = localStorage.getItem('users');
    usersArray= JSON.parse(usersArray);
   // console.log(JSON.parse(usersArray));
     

    let FilterUser = usersArray.filter((index)=>{
          if(index.email===loginData.email && index.pwd===loginData.pwd){
              return index
          }
    })

    console.log("filterdata",FilterUser);
    if(FilterUser && FilterUser.length>=1){
        alert("Login SuccessFully");
        window.location='index.html'
        localStorage.setItem('session-user',JSON.stringify(FilterUser[0]));
        const modalEl = document.getElementById('exampleModalLogin');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    }
    else{
        alert("Login Fail");
    }
    
    
    
})

// =======================Logoutcode==========================
function logout(){
    localStorage.removeItem('session-user');
    window.location='index.html'
}

function onloadSetting(){
    let str="";
      if(localStorage.getItem('session-user')){
        user=JSON.parse(localStorage.getItem('session-user'));
           
           str+=` <span>Wecome:${user.username} </span><button type="button" class="btn btn-primary" id="logoutbtn" onclick="logout()">
        Logout
        </button>      
        `
      }
   else{
        
       str += ` <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLogin">
        Login
        </button>`
   }

   console.log("str=",str);

   
   

   document.getElementById('logData').innerHTML=str;

}



window.onload=onloadSetting();