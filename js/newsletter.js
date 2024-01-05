let email_imput = document.getElementById('input-email');

let error_text = document.getElementById('error-text');

document.getElementById('subscribe-button').addEventListener('click', function(){
    let email = email_imput.value;
    console.log(email);

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validEmail.test(email)){
        email_imput.style.color = "black";
        email_imput.style.borderColor = "rgb(206, 212, 218)";
        email_imput.style.backgroundColor = "rgb(255, 255, 255)";
        error_text.innerHTML = "";
		//cambiar de seccion
	}else{
        email_imput.style.color = "red";
        email_imput.style.borderColor = "rgb(255, 87, 87)";
        email_imput.style.backgroundColor = "rgba(255, 87, 87, 0.2)";
        error_text.innerHTML = "Valid email required";
    }
})