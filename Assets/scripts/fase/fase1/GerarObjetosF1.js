#pragma strict


// atributos do transform do objeto/*

static var tempoVariavel:float;
var moviAtorio:float[]=new float[5];
var a:float;
var obj4:GameObject[];
var velocidade:float;

private var obj:GameObject;

function Start () {

}

function Update () {
if(MovimentoObjF1.pause==0){
tempoGerar();
//aumentoVel();
EstadoJogoF1.comecar();
}
}


var aleatorio:float;
var tempo:float;
var j:float = 0;
  function tempoGerar()// fun�ao para gerar o objeto
  {

 tempo=tempo+Time.deltaTime;
     if(tempo>tempoVariavel)//tempo para gerar objeto
      {
      movimentarAleatorio();
      geraObjeto();
      
 //chama a fun�ao movimentarAleatorio
      tempo=0;
     }
  }

   function geraObjeto()
   {
    aleatorio=Random.Range(0,19);
     obj=obj4[aleatorio];
     Instantiate(obj,transform.position,transform.rotation);



   }
 /* function aumentoVel()
  {
  j+=0.01;

    if(j>9){
      j=0;
       tempoVariavel=tempoVariavel/1.13;
       MovimentoObj.velObj=MovimentoObj.velObj+0.125;

     }

  }*/ 
  var posicaoant:float;
  var posicao:float;
//   movimenta�ao do spawn
  function movimentarAleatorio(){
  
     
      posicao=Random.Range(0,5);
       if(posicao == posicaoant){//verifica se e a mesma posi�ao em qual o anterior foi gerado
       
         //Debug.Log("fal");
 movimentarAleatorio();//recursao
        
       }
       else{
       
       
       posicaoant=posicao;
         transform.position=new Vector3(moviAtorio[posicao],transform.position.y,transform.position.z);
         
         //  Debug.Log(posicaoant);
      }
   }
  
  
  
