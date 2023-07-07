/**
 * Confirmação de exclusao de um contato
 * @author Leandro
 * @param idcon
 */

 function confirmar(idcon) {
	 let resposta = confirm("Confirma a exclusão desse contato?")
	 if (resposta === true){
		 window.location.href = "delete?idcon=" + idcon
	 }
 }