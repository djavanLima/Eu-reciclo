#pragma strict

class fase extends MonoBehaviour{
var hit:RaycastHit;
var raio:Ray;

var cadeado2:GameObject;
var cadeado3:GameObject;
var cadeado4:GameObject;
var voltaBt:GameObject;
var fase1:GameObject;
var fase2:GameObject;
var fase3:GameObject;
var fase4:GameObject;
static var escfase: int;

function Awake(){
getRecord() ;
estadoSom();}
function Start () {


escfase=0;
estouraCadeado();
}

 function Update () {
 estadoSom();
 if(Input.GetKeyDown(KeyCode.Escape)){
 Application.LoadLevel("menu");
 
 }
      if(Input.GetMouseButtonDown(0)){
     {
       raio=camera.ScreenPointToRay(Input.mousePosition);
       
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
               
    //entrar no experimento
                           if (hit.collider.gameObject == voltaBt){
                           
        Application.LoadLevel("menu");
                        
          
                           }
                          
                           if (hit.collider.gameObject == fase1 && PlayerPrefs.GetInt("cntrlfase")>0){// controle das fases e dos cadeados
                           
                           escfase=1;
        Application.LoadLevel("Livre");
                        
                          
                           }
                           if (hit.collider.gameObject == fase2 && PlayerPrefs.GetInt("cntrlfase")>1){
                            
                           escfase=2;
        Application.LoadLevel("fase2");
        
          
                           }
                           if (hit.collider.gameObject == fase3 && PlayerPrefs.GetInt("cntrlfase")>2){
                            
                           escfase=3;
        Application.LoadLevel("fase3");
        
          
                           }
                           if (hit.collider.gameObject == fase4 && PlayerPrefs.GetInt("cntrlfase")>3){
                            
                           escfase=4;
        Application.LoadLevel("fase4");
        
          
                           }
        
                           //entrar no experimento
      

       }
      }


    }
  }

 }
  function estouraCadeado(){
          if ( PlayerPrefs.GetInt("cntrlfase")>0){// controle das fases e dos cadeados
           
          
        
          
           }
           
            if ( PlayerPrefs.GetInt("cntrlfase")>1){// controle das fases e dos cadeados
           cadeado2.SetActive(false);
           }
          else{
            cadeado2.SetActive(true);
           }
        
          
           
            if ( PlayerPrefs.GetInt("cntrlfase")>2){// controle das fases e dos cadeados
           cadeado3.SetActive(false);
          
        
          
           }
           else{
            cadeado3.SetActive(true);
           }
           
           
            if ( PlayerPrefs.GetInt("cntrlfase")>3){// controle das fases e dos cadeados
           cadeado4.SetActive(false);
          
        
          
           }
           else{
            cadeado4.SetActive(true);
           }
  
  }
 
  function estadoSom(){
  if(Menu().SomEstate==true){
  GetComponent(AudioSource).audio.mute=false;
  }
  else{
  
  GetComponent(AudioSource).audio.mute=true;
  
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




  
}