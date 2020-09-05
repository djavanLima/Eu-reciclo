#pragma strict

class Menu extends MonoBehaviour{
var anison:Animation;
var hit:RaycastHit;
var popup:GameObject;
var pOp:GameObject;
var Inidifi:GameObject;//popup dificuldade
var botoes:GameObject;
var raio:Ray;
var btPlay:GameObject;
var btSom:GameObject;
//var btSomOff:GameObject;
var btInfo:GameObject;
var btShare:GameObject;
var popSair:GameObject;
var poModo:int;
 var objetivo1:TextMesh;
 var objetivo2:TextMesh;
 var texto1:TextMesh;
 var texto2:TextMesh;
public static var SomEstate:boolean=true;
function Awake(){

estSm();
}
function Start () {
if(PlayerPrefs.GetInt("cntrlfase")==0){
PlayerPrefs.SetInt("cntrlfase",1);
}
if(PlayerPrefs.GetInt("dificuldade")==0){
PlayerPrefs.SetInt("dificuldade",2);
}
getRecord();
 pOp.SetActive(false);//popup de opçoes
popSair.SetActive(false);//de sair
botoes.SetActive(true);//popup de botoes
Inidifi.SetActive(false);//inificuldade 
poModo=0;

reiniciaTex();

}

 function Update () {

 
 
 

      
      if(Input.GetMouseButtonDown(0)){
     
       raio=camera.ScreenPointToRay(Input.mousePosition);
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
                    
    //entrar no experimento
    
    if (hit.collider.CompareTag("BTsair")&& poModo==0){

popSair.SetActive(true);//ativa o sair
botoes.SetActive(false);//desativa os botoes


}
if (hit.collider.CompareTag("BTsair")&& poModo==1){

popup.SetActive(false);//desativa os sair
botoes.SetActive(true);//ativa os botoes
  reiniciaTex();
                          
poModo=0;

}
    
    
                           if (hit.collider.gameObject==btPlay){// apertar play
                           Inidifi.SetActive(true);
                            botoes.SetActive(false);
                                                                       
                           }
                           
                             if (hit.collider.CompareTag("sairMenu")){
                          
        Application.Quit();
      
          
                           }
                                 if (hit.collider.CompareTag("naoMenu")){
                          
        popSair.SetActive(false);
        botoes.SetActive(true);
      
          
                           }
                           
                           
                           
                         
                            if (hit.collider.CompareTag("opcoes")){
                            
                        
                             botoes.SetActive(false);
	                              pOp.SetActive(true);
                              
                             
                              
                           }
        
                 if (hit.collider.CompareTag("sobre")){
                           
        Application.LoadLevel("sobre");
      
          
                           }
                           
                  if(hit.collider.CompareTag("som")){
                  if(GetComponent(AudioSource).audio.mute==true){
                  GetComponent(AudioSource).audio.mute=false;
                  
                  SomEstate=true;
                 
                  }
                  
                }
                 if(hit.collider.CompareTag("somoff")){
                  if(GetComponent(AudioSource).audio.mute==false){
                  GetComponent(AudioSource).audio.mute=true;
                 
                  SomEstate=false;
                  
                  }
                  }
                                            //entrar no experimento
      
                
       }
      }


    
  }

 }
 var ponto:TextMesh;
 var seg:TextMesh;
 var min:TextMesh;
 var dec:TextMesh;
 
 function getRecord() {
 //Debug.Log(PlayerPrefs.GetString("decimStr"));
 ponto.text=PlayerPrefs.GetInt("score").ToString();
 dec.text=PlayerPrefs.GetFloat("decimStr").ToString(".0");
 seg.text=PlayerPrefs.GetFloat("segunStr").ToString("00");
 min.text=PlayerPrefs.GetFloat("minStr").ToString("00");
 }
function estSm(){
if(SomEstate==true){
GetComponent(AudioSource).audio.mute=false;
}
else{
GetComponent(AudioSource).audio.mute=true;

}

}

}

function reiniciaTex(){
 objetivo1.text="Olá amiguinhos!";
   objetivo2.text="";
   texto1.text="  Vamos aprender a\nreciclar jogando?";
                  
   texto2.text="";
   texto1.text.Replace("\n\n","\n");

}



