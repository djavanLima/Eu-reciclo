#pragma strict
var megErro:GameObject;
static var apErro:boolean;
private var temp:float;
function Start () {
megErro.SetActive(false);
}

function FixedUpdate () {
	if(apErro==true){
        megErro.SetActive(true);
        temp+=0.03;
        if(temp>1.5){
        megErro.SetActive(false);
        apErro=false;
        temp=0;
        
       }
	}
       
       if(GerarObjetos.vida==0){
       
               estourarObjetos.Saverecord();
			   gameOver.nomeLing="Você errou 3 vezes!";
			                     
			   gameOver.refLing="  Você tentou colocar\n o objeto na lixeira in-\ncorreta.\n \nTente novamente.";
			   Application.LoadLevel("gameOver");

       }


}