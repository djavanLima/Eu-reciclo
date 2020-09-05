#pragma strict


// atributos do transform do objeto/*
class GerarObjetos extends MonoBehaviour{
static var tempoVariavel:float;
static var vida:int;
var moviAtorio:float[]=new float[5];
var a:float;
var obj4:GameObject[];
var velocidade:float;
var qGerar:int;
var gerUma:boolean;
private var obj:GameObject;

function Start () {

}

function Update () {
if(MovimentoObj.pause==0){
tempoGerar();
//aumentoVel();
}
}


var aleatorio:float;
var tempo:float;
var j:float = 0;
  function tempoGerar()// funçao para gerar o objeto
  {

 tempo=tempo+Time.deltaTime;
     if(tempo>tempoVariavel)//tempo para gerar objeto
      {
      movimentarAleatorio();
      geraObjeto();
      
 //chama a funçao movimentarAleatorio
      tempo=0;
     }
     
     if(gerUma==false){ //gera apenas uma vez
      movimentarAleatorio();
      geraObjeto();
      gerUma=true;
     }
     
  }
  
  
  
  

   function geraObjeto()
   {
    aleatorio=Random.Range(0,qGerar);
     obj=obj4[aleatorio];
     Instantiate(obj,transform.position,transform.rotation);



   }
 
  var posicaoant:float;
  var posicao:float;
  // movimentaçao do spawn
  function movimentarAleatorio(){
  
     
      posicao=Random.Range(0,5);
       if(posicao == posicaoant){//verifica se e a mesma posiçao em qual o anterior foi gerado
       
         //Debug.Log("fal");
 movimentarAleatorio();//recursao
        
       }
       else{
       
       
       posicaoant=posicao;
         transform.position=new Vector3(moviAtorio[posicao],transform.position.y,transform.position.z);
         
         //  Debug.Log(posicaoant);
       }
   }
  
  
  
}