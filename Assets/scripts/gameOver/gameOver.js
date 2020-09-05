#pragma strict

var raio:Ray;
var titulo:TextMesh;
var texto:TextMesh;
var hit:RaycastHit;
var tempoSeg:TextMesh;
var tempoMin:TextMesh;
var tempoDec:TextMesh;
var score:TextMesh;
var compfel:GameObject;
var comptri:GameObject;
static var decimoOver:float;
static var segundoOver:float;
static var minutoOver:float;
static var pontOver:int;


function Start () {
compfel.SetActive(false);
comptri.SetActive(true);
}

function Update () {
salvarRecord();
score.text=pontOver.ToString();
tempoDec.text=decimoOver.ToString(".0");
tempoSeg.text=segundoOver.ToString("00");
tempoMin.text=minutoOver.ToString("00");
     if(Input.GetMouseButtonDown(0)){
      
      raio=camera.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(raio,hit)){
          if(hit.collider){
              if(hit.collider.gameObject.tag=="voltarJogo"){

                       
                       if(fase.escfase==1){
                       Application.LoadLevel("livre");
                       }
                       if(fase.escfase==2){
                       Application.LoadLevel("fase2");
                       }
                       if(fase.escfase==3){
                       Application.LoadLevel("fase3");
                       }
                       if(fase.escfase==4){
                       Application.LoadLevel("fase4");
                       }
                      
                  }
                  
                   if(hit.collider.gameObject.tag=="OverMenu"){ 
                       
                       Application.LoadLevel("menu");
                        
                   }
          
          
           }
      
        }
     }
}
var somaTemp:float;
static var nomeLing:String;
static var refLing:String;
function salvarRecord(){
//soma o tempo

	somaTemp=decimoOver+segundoOver+minutoOver;
	/*PlayerPrefs.SetInt("score",0);
	PlayerPrefs.SetInt("tempFloat",0);
	PlayerPrefs.SetFloat("decimStr",0);
	PlayerPrefs.SetFloat("segunStr",0);
	PlayerPrefs.SetFloat("minStr",0);
	PlayerPrefs.SetInt("cntrlfase",0);
	PlayerPrefs.SetInt("dificuldade",0);*/
			
			 if((PlayerPrefs.GetInt("score")<pontOver)&&(PlayerPrefs.GetFloat("tempFloat")<somaTemp)){
				 compfel.SetActive(true);
				comptri.SetActive(false);
				nomeLing="Parabens";
				refLing="Voce bateu o recorde!!";
				titulo.text=nomeLing;
				texto.text=refLing;
				PlayerPrefs.SetInt("score",pontOver);
				PlayerPrefs.SetInt("tempFloat",somaTemp);
				PlayerPrefs.SetFloat("decimStr",decimoOver);
				PlayerPrefs.SetFloat("segunStr",segundoOver);
				PlayerPrefs.SetFloat("minStr",minutoOver);


			 }
			else{
				titulo.text=nomeLing;
				texto.text=refLing;
				texto.text.Replace("\\n","n");

			}
	

	
	
	  saveInFase();
	
	
	
	

}

function saveInFase(){

if(fase.escfase==1){
	
	
	 if(pontOver >210){
	             PlayerPrefs.SetInt("cntrlfase",2);
				 compfel.SetActive(true);
				comptri.SetActive(false);
				nomeLing="Parabéns";
				refLing=" Você desbloqueou a pró-\nxima fase!";
				         
				titulo.text=nomeLing;
				texto.text=refLing;
              
			 }
			else{
				titulo.text=nomeLing;
				texto.text=refLing;
				texto.text.Replace("\\n","n");

			}
	
	
	}
	if(fase.escfase==2){
	Debug.Log("fase2");
	 if(pontOver >200){
	             PlayerPrefs.SetInt("cntrlfase",3);
				 compfel.SetActive(true);
				comptri.SetActive(false);
				nomeLing="Parabéns";
				refLing=" Você desbloqueou a pró-\nxima fase!";
				         
				titulo.text=nomeLing;
				texto.text=refLing;
              
			 }
			else{
				titulo.text=nomeLing;
				texto.text=refLing;
				texto.text.Replace("\\n","n");

			}
	}
	if(fase.escfase==3){
	
	Debug.Log("fase3");
	if(pontOver >200){
	             PlayerPrefs.SetInt("cntrlfase",4);
				 compfel.SetActive(true);
				comptri.SetActive(false);
				nomeLing="Parabéns";
				refLing=" Você desbloqueou a pró-\nxima fase!";
				         
				titulo.text=nomeLing;
				texto.text=refLing;
              
			 }
			else{
				titulo.text=nomeLing;
				texto.text=refLing;
				texto.text.Replace("\\n","n");

			}
	
	}
	if(fase.escfase==4){
	
	Debug.Log("fase4");
	if(pontOver >200){
	             
				 compfel.SetActive(true);
				comptri.SetActive(false);
				nomeLing="Parabéns";
				refLing=" Você finalizou o jogo.";
				         
				titulo.text=nomeLing;
				texto.text=refLing;
              
			 }
			else{
				titulo.text=nomeLing;
				texto.text=refLing;
				texto.text.Replace("\\n","n");

			}
	
	}
}




