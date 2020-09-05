#pragma strict
static var pF:boolean;
var tempo:float;
var setaBolha:GameObject;
static var pause:boolean;
var velocidade:float=0.5;
static var tocou:boolean;
function Start () {

}

function Update () {
if(pause==false){
transform.Translate(0,-(velocidade*Time.deltaTime),0);
}
if(transform.position.y<4.66){
pause=true;
	if(tocou!=true){ 
		tempo+=0.02;
			if(tempo>1){
				setaBolha.renderer.enabled=!setaBolha.renderer.enabled;
				tempo=0;
			}
	 }
	 else{
	 setaBolha.renderer.enabled=false;
	 }
}


}
    




        function OnTriggerEnter(outroObjeto:Collider){
         if(gameObject.CompareTag("Bolha_metal")){
				   if(outroObjeto.gameObject.tag=="Metal"){
				   sonMDlivre.PlaySound(gameSound.estouro);
				   Destroy(gameObject);
				   pause=false;
				   Linguagem.adscore=true;
				   tocou=false;
gameObject.Find("Main Camera").GetComponent(funcoesTutorial).setaMetal.renderer.enabled=false;				   
				   }
			   }
			   
			  
			if(gameObject.CompareTag("Bolha_plastico")){
			   if(outroObjeto.gameObject.tag=="Plastico"){
			   sonMDlivre.PlaySound(gameSound.estouro);
			   Destroy(gameObject);
			   Linguagem.adscore=true;
			   pause=false;
			   tocou=false;
	 gameObject.Find("Main Camera").GetComponent(funcoesTutorial).setaPlastico.renderer.enabled=false;
	 pF=true;
			   }
			}
			
			if(gameObject.CompareTag("Bolha_papel")){
			   if(outroObjeto.gameObject.tag=="Papel"){
			   sonMDlivre.PlaySound(gameSound.estouro);
			   Destroy(gameObject);
			   Linguagem.adscore=true;
			   pause=false;
			   tocou=false;
			   gameObject.Find("Main Camera").GetComponent(funcoesTutorial).setaPapel.renderer.enabled=false;
			   
			   }
			}
			if(gameObject.CompareTag("Bolha_vidro")){
			   if(outroObjeto.gameObject.tag=="Vidro"){
			   sonMDlivre.PlaySound(gameSound.estouro);
			   Destroy(gameObject);
			   Linguagem.adscore=true;
			   pause=false;
			   tocou=false;
			   gameObject.Find("Main Camera").GetComponent(funcoesTutorial).setaVidro.renderer.enabled=false;
			   }
			}
			
			
			

}