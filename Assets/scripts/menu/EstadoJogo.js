#pragma strict



//private var currentState:GameState=currentState.START;

function Start () {
if(PlayerPrefs.GetInt("dificuldade")==1){
 facil();
 }
if(PlayerPrefs.GetInt("dificuldade")==2){
 medio();
 }
 if(PlayerPrefs.GetInt("dificuldade")==3){
 dificil();
 }
}  

function Update () {
    
       
    
    
}

function medio(){
 MovimentoObj.velObj=0.4;
estourarObjetos.velIni=1;  
 estourarObjetos.segundo=0f;
 estourarObjetos.minuto=0f;
 estourarObjetos.decimo=0f;
 estourarObjetos.numberScore=0f;
 estourarObjetos.tempIni=1.2;
GerarObjetos.vida=3;
GerarObjetos.tempoVariavel=5;


}

function dificil(){
 MovimentoObj.velObj=0.5;
estourarObjetos.velIni=1;  
 estourarObjetos.segundo=0f;
 estourarObjetos.minuto=0f;
 estourarObjetos.decimo=0f;
 estourarObjetos.numberScore=0f;
 estourarObjetos.tempIni=1.2;
GerarObjetos.vida=3;
GerarObjetos.tempoVariavel=3;


}


static var gerar:int;
function facil(){

 MovimentoObj.velObj=0.3;
estourarObjetos.velIni=1;  
 estourarObjetos.segundo=0f;
 estourarObjetos.minuto=0f;
 estourarObjetos.decimo=0f;
 estourarObjetos.numberScore=0f;
 estourarObjetos.tempIni=1.2;
GerarObjetos.vida=3;
GerarObjetos.tempoVariavel=7;

}








