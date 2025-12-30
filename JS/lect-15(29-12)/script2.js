document.getElementById('regform').addEventListener('submit',function(e){
        e.preventDefault();

        let userInput = document.getElementById('username');
        if(userInput.value ==""){
            let p1 = document.createElement('p');
            p1.textContent="Enter valid Username";
            p1.style.color="red";
            document.getElementById('userError').appendChild(p1);
            userInput.focus();
        }
        else{
            let userError =  document.getElementById('userError');
            if(userError){
                userError .remove();
            }
          
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        function validateEmail(email) {
            console.log(emailRegex.test(email));
            
            return emailRegex.test(email);
            }
        let emailInput = document.getElementById('Email');
        if(emailInput.value == "" ){
             let p1 = document.createElement('p');
              p1.setAttribute('class','msgEmail');
            p1.textContent="Enter valid Email";
            p1.style.color="red";
            document.getElementById('emailError').appendChild(p1);
            emailInput.focus();
        }
        else if(!validateEmail(emailInput.value)){
              let p1 = document.createElement('p');
            p1.textContent="Enter valid Email example abc@example.com";
            p1.setAttribute('class','msgEmail');
            p1.style.color="red";
            document.getElementById('emailError').appendChild(p1);
            emailInput.focus();
        }
        else{
            document.getElementById('emailError').remove();
        }

})

document.getElementById('pwdshow').addEventListener('click',function(){
    console.log("here");
    
    let pwd=document.getElementById('pwd');
    let typeName = pwd.getAttribute('type');
    console.log(typeName);
    
    let newType = typeName==="password" ? "text" :"password";
    console.log(newType);
    
    pwd.setAttribute('type',newType)
})

document.getElementById('pwd').addEventListener('keyup',function(){
     let val = this.value;
//Aplhabet checking
     let regex1 = /^[A-Za-z]+$/;
      let regex2= /[0-9]+$/
      let regex3 = /[@$!%*#?&]/;
     console.log(regex1.test(val));
     
     if(regex1.test(val)){
        document.getElementById('aplphaId').style.color="green";
     }
    if(regex2.test(val)){
        document.getElementById('numId').style.color="green";
     }
      if(regex3.test(val)){
        document.getElementById('charId').style.color="green";
     }

    
})


