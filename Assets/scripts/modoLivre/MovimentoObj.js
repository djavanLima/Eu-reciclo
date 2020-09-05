#pragma strict


class MovimentoObj extends MonoBehaviour{
var Contativo:boolean;
static var velObj:float;
static var pause:float=0;
static var cntrlSaveMov:boolean=false;
 var k:float;

function Start () {
 
}
function Update(){
if(pause==0){

 



 LinguagemLivre();


// Debug.Log(velObj);
transform.position.y-=(velObj*Time.deltaTime);



if(transform.position.y<-5.25){
Destroy(gameObject);

}
}
}


function LinguagemLivre(){

   
  
	   if(transform.position.y<-3.6){
		   switch(tag){
		   // estruturada
			   case "Bolha_plastico":
			   estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou";
			                     
			   gameOver.refLing="Tente novamente";
			   Application.LoadLevel("gameOver");
			   break;
			     case "Bolha_metal":
			   estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou";
			   gameOver.refLing="Deixou passar um objeto\n metálico \n\nTente novamente\n";
			   Application.LoadLevel("gameOver");
			   break;
			   
			      case "Bolha_papel":
			   estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou";
			   gameOver.refLing="Deixou passar um objeto\n feito de papel \n\nTente novamente\n";
			   Application.LoadLevel("gameOver");
			   break;
			   
			     case "Bolha_vidro":
			   estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou";
			   gameOver.refLing="Deixou passar um objeto\n feito de vidro \n\nTente novamente\n";
			   Application.LoadLevel("gameOver");
			   break;
			   
			     case "Bolha_organico":
			   estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou";
			   gameOver.refLing="Deixou passar um objeto\n orgânico \n\nTente novamente\n";
			   Application.LoadLevel("gameOver");
			   break;
		   
			   }
	 
	   
	   
	   }
   }
   
  
   


  function OnTriggerEnter(outroObjeto:Collider){
         if(gameObject.CompareTag("Bolha_metal")){
				   if(outroObjeto.gameObject.tag=="Metal"){
				   sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   
				   Linguagem.adscore=true;
				   }
				  if(outroObjeto.gameObject.tag=="Vidro"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   if(outroObjeto.gameObject.tag=="Plastico"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   
			   if(outroObjeto.gameObject.tag=="Papel"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   
			   if(outroObjeto.gameObject.tag=="Organico"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			  }
			if(gameObject.CompareTag("Bolha_plastico")){
			   if(outroObjeto.gameObject.tag=="Plastico"){
			   sonMDlivre.PlaySound(gameSound.estouro);
			   Destroy(gameObject);
			   Linguagem.adscore=true;
			   }
			   
			  if(outroObjeto.gameObject.tag=="Vidro"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   if(outroObjeto.gameObject.tag=="Papel"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   
			   if(outroObjeto.gameObject.tag=="Metal"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			   
			   if(outroObjeto.gameObject.tag=="Organico"){
			    msgErro.apErro=true;
			   GerarObjetos.vida-=1;
			    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
			   Debug.Log(GerarObjetos.vida);
			   }
			  }
			
			if(gameObject.CompareTag("Bolha_papel")){
				   if(outroObjeto.gameObject.tag=="Papel"){
				   sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Linguagem.adscore=true;
				   }
				   
				   if(outroObjeto.gameObject.tag=="Vidro"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   if(outroObjeto.gameObject.tag=="Plastico"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Metal"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Organico"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				   Debug.Log(GerarObjetos.vida);
				   }
			   
			   
			   
			  }
		  if(gameObject.CompareTag("Bolha_vidro")){
				   if(outroObjeto.gameObject.tag=="Vidro"){
				   sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   
				   Linguagem.adscore=true;
				   }
				   
				  if(outroObjeto.gameObject.tag=="Metal"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   if(outroObjeto.gameObject.tag=="Plastico"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Papel"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Organico"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
			  }
			  
			  
			   if(gameObject.CompareTag("Bolha_organico")){
				   if(outroObjeto.gameObject.tag=="Organico"){
				   sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Linguagem.adscore=true;
				   }
				   
				  if(outroObjeto.gameObject.tag=="Metal"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   if(outroObjeto.gameObject.tag=="Plastico"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Vidro"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
				   
				   if(outroObjeto.gameObject.tag=="Papel"){
				    msgErro.apErro=true;
				   GerarObjetos.vida-=1;
				    sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   Debug.Log(GerarObjetos.vida);
				   }
			  }
			  

		  
  }


}