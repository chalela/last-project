
    function seePassword() {

        let pass = document.getElementById("password").type;
        document.getElementById("password").type = "text";
    
    
    let tvali = document.getElementById("divpass").innerHTML;
    
    // console.log(pass);
    // console.log(tvali);
    
    if(tvali == '<i class="fa-solid fa-eye-slash" aria-hidden="true"></i>'){
        document.getElementById("password").type;
        document.getElementById("divpass").innerHTML = '<i class="fa-solid fa-eye"></i>'
    
    }
    else{
       
        document.getElementById("password").type = "password";
        
        
        document.getElementById("divpass").innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
    
        
    }
    
    document.getElementById("divpass").addEventListener("click", seePassword)
    
    
    // {
    //     let a= 2, b=5;
    //     console.log(a, b)
    // if(true){
    //     console.log("correct")
    // }
    // else{
    //     console.log("incorect");
    // }
    // }