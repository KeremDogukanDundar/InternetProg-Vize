function store(){

    var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var email = document.getElementById('email');
    var pw = document.getElementById('pw');
	var cpw = document.getElementById('cpw');
	
	if(name!='' && surname!='' && email!='' && pw!='' && cpw!='') {
		localStorage.setItem('name', name.value);
		localStorage.setItem('surname', surname.value);
		localStorage.setItem('e-mail', email.value);
        localStorage.setItem('pw', pw.value);
		
        alert('Your account has been created');
	}
	else {
		alert("Lütfen eksik bilgileri tamamlayin");
	}
	}

function check(){
	
    var storedEmail = localStorage.getItem('e-mail');
    var storedPw = localStorage.getItem('pw');

    var myemail = document.getElementById('loginEmail');
    var mypw = document.getElementById('userPw');


    if(myemail.value == storedEmail && mypw.value == storedPw){
        window.open("src/app/login/dashboard.component.html");
    }else{
        alert('E-Posta veya şifre yanliş');
    }
}