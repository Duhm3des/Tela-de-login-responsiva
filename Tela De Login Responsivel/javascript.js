function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "admin"){
        location.href = "PROJECT/home.html";
    }else{
        alert('usuario invelido');
    }
}