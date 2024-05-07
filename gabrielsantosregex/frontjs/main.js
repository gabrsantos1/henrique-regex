function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    
    //regex - valida expressoes
    var nomeRegex = /^[a-zA-ZÀ-ú\s]{1,100}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefoneRegex = /^[0-9]{2}\s[0-9]{4,5}-[0-9]{4}$/;
  
    if (!nomeRegex.test(nome)) {
      alert("Insira um nome válido e sem números.");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Insira um email que contenha as regras descritas.");
      return false;
    }
  
    if (!telefoneRegex.test(telefone)) {
      alert("Insira um número de telefone válido no formato '00 9 1234-5678'.");
      return false;
    }
  
    return true;
  }
  