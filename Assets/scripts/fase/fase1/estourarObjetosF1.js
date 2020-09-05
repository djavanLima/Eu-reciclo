#pragma strict
  var hit:RaycastHit;
  var audiofun:AudioClip;
   var raio:Ray;
   var score:TextMesh;
   var aviso:GameObject;
   private var j:float;
  static var numberScore:int;
   
   var temporarioCrono:float;
function Start () {

aviso.SetActive(true);
}

function Update () {
if(LinguagemF1.adscore==true){
addScore();
LinguagemF1.adscore=false;
}
score.text=numberScore.ToString();
if(MovimentoObjF1.pause==0){
estadoSom();
if(!audio.isPlaying){
audio.clip=audiofun;

audio.Play();
}
j+=Time.deltaTime;
if(j>5){
aviso.SetActive(false);
}
destruirObjeto();

  }
  else{
  
  audio.Pause();
  }
}
 
function FixedUpdate(){
if(MovimentoObjF1.pause==0){
cronometro();

}

}
 
 
 
 
  var touchAnterior: int;
 function destruirObjeto(){
 
     if(Input.GetMouseButtonDown(0)){
      raio=camera.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(raio,hit)){
           if(hit.rigidbody){
         if(hit.rigidbody.collider){

         Destroy(hit.rigidbody.gameObject);
           //Debug.Log("clicou");
           LinguagemF1.lingns(hit);
           
           NaoLingF1().nLgns(hit);// funcao de estourar inimigo
           
           
           
            }    
           }
         }
      }
      
      if(Input.touchCount>0 && touchAnterior==0){
     
      raio=camera.ScreenPointToRay(Input.GetTouch(0).position);
        if(Physics.Raycast(raio,hit)){
           if(hit.rigidbody){
         if(hit.rigidbody.collider){
           //Debug.Log("clicou");
            LinguagemF1.lingns(hit);
           NaoLingF1().nLgns(hit);// funcao de estourar inimigo
          
           Destroy(hit.rigidbody.gameObject);
          
           sonMFase1.PlaySound(gameSom.estouro);
           
            }    
           }
         }
      }
       touchAnterior=Input.touchCount;
      
   }
   
   
  public function addScore(){//aumenta a pontua�ao
   contScore+=1;
   numberScore+=10;
   
   
   if(contScore==3){// quando for dez quer dizer que a pontua�ao e 100
   aumentoVel();
   Debug.Log(contScore);
   contScore=0;
   
   }
   }
   
  
   
   var decimoCrono:TextMesh;
   var segundoText:TextMesh;
   var minutoText:TextMesh;
   static var decimo:float;
  static var segundo:float;
  static var minuto:float;
   function cronometro(){
 var aux:String;
 temporarioCrono+=0.02;   
     aux=temporarioCrono.ToString("0.0");// convertendo em decimo confiavel
     decimo=float.Parse(aux);
   if(decimo==0.9){// zerar decimo
   temporarioCrono=0.0;
   
    segundo=segundo+1;
   }
   if(segundo==60){// se chegar e 60 aumenta 1 minuto e zera segundos
   segundo=0;
   minuto+=1f;
   }
   
   
   
   
  minutoText.text=minuto.ToString("00");
 segundoText.text=segundo.ToString("00");
 decimoCrono.text=decimo.ToString(".0");
 
   
   }
   static var tempIni:float;
   static var velIni:float;
    public var contScore:float;
  function aumentoVel()
  {
  
var x:float;
var y:float;
       MovimentoObjF1.velObj=MovimentoObjF1.velObj+0.12;
x=MovimentoObjF1.velObj/velIni;// pegar proporcao da velocidade
Debug.Log("x"+x);
      
       GerarObjetosF1.tempoVariavel=tempIni/x;
       
       

     

  }
  
  static var overPont:float; 
  //fun�ao para verificar se o record
  static function Saverecord(){
       // if(MovimentoObj.cntrlSaveMov==true){//verifica se perdeu
       Debug.Log("ja");
         gameOver.pontOver=numberScore;
         gameOver.segundoOver=segundo;
         gameOver.minutoOver=minuto;
         gameOver.decimoOver=decimo;
        // }
  
  
  }
  
  function estadoSom(){
  if(Menu().SomEstate==true){
  GetComponent(AudioSource).audio.mute=false;
  }
  else{
  
  GetComponent(AudioSource).audio.mute=true;
  
  }
  
  }
  
  
  
  
  
   
  