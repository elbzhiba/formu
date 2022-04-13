document.addEventListener("DOMContentLoaded", e => {

  
    console.log(e.target);
    btn_validation = document.getElementById('btn-val');

    const User = {
        login: "admin",
        pass: 1234
    }

    class Admin{

        /*
        constructeur
        */ 
        constructor(login, pass){
            this.login = document.getElementsByName("login")[0];
            this.pass = document.getElementsByName("pass")[0];
        }
        /*
        getter
        */ 
    get_out(){
        return `${this.login} : ${this.pass}`
    }
        /*
        setter
        */
    set_out(){
        if(this.login.value == User.login && this.pass.value == User.pass){
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
            console.log(`${this.login.value} : ${this.pass.value}`) 
        }
    
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            console.log("ko")
        }
    }
    static msg(){
        console.log("message privé")
    }
}
const new_event = new Admin( this.login, this.pass)
btn_validation.addEventListener("click",(e)=>{
    e.preventDefault();
    new_event.get_out()
    new_event.set_out()
    console.log(e.target)
})

   
})