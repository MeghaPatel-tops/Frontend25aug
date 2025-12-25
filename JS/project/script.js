document.getElementById('regBtn').addEventListener('click',function(e){
    alert("here")
    e.preventDefault();
    //document.getElementById('exampleModalLogin').hide();
     const modalEl = document.getElementById('exampleModalLogin');
    const modal = bootstrap.Modal.getInstance(modalEl);
 let email = document.getElementById('regEmail').value;
    let user1={
        username:document.getElementById('regUsername').value,
        email:document.getElementById('regEmail').value,
        pwd:document.getElementById('regPwd').value,
    }
    alert(user1)

    localStorage.setItem(email,JSON.stringify(user1))

    modal.hide();
})