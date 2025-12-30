document.getElementById('regform').addEventListener('submit',function(e){
        e.preventDefault();

        let userInput = document.getElementById('username');
        if(userInput.value ==""){
            let p1 = document.createElement('p');
            p1.textContent="Enter valid Username";
            p1.style.color="red";
            document.getElementById('userError').appendChild(p1);
            alert("Enter User name");
            userInput.focus();
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        function validateEmail(email) {
            console.log(emailRegex.test(email));
            
            return emailRegex.test(email);
            }
        let emailInput = document.getElementById('Email');
        if(emailInput.value == "" ){
            alert("Enter Email address");
            emailInput.focus();
        }
        else if(!validateEmail(emailInput.value)){
             alert("Enter Valid Email address ex:abc@example.com");
            emailInput.focus();
        }

})


