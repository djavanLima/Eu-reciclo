#pragma strict



var Contativo:boolean;
static var velObj:float=0;
static var pause:float=0;
static var cntrlSaveMov:boolean=false;
 var k:float;
function Start () {

}
function Update(){
if(pause==0){
Linguagem();
transform.position.y-=(velObj*Time.deltaTime);



if(transform.position.y<-5.25){
Destroy(gameObject);

}
}
}

function Linguagem(){

   
  
   if(transform.position.y<-3.6){
   switch(tag){
   // estruturada
   case "abc":
   estourarObjetosF1.Saverecord();
   gameOver.nomeLing="abc";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetosF1.Saverecord();
   gameOver.nomeLing="ada";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="bliss";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetosF1.Saverecord();;
    gameOver.nomeLing="b";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="bcpl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="basic";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   //formal
   case "a+":
   estourarObjetosF1.Saverecord();
     gameOver.nomeLing="a+";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "apl":
  estourarObjetosF1.Saverecord();
     gameOver.nomeLing="apl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "autolisp":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="autolisp";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "lisp":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="lisp";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    //funcional
   case "afnix":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="afnix";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "alice":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="alice";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "bistro":
   estourarObjetosF1.Saverecord();
     gameOver.nomeLing="bistro";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "fl":
   estourarObjetosF1.Saverecord(); 
   gameOver.nomeLing="fl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="actionscript";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "eiffel":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="eiffel";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "f#":
   estourarObjetosF1.Saverecord();
     gameOver.nomeLing="f#";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "fatom":
   estourarObjetosF1.Saverecord();
    gameOver.nomeLing="fatom";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   }
    /*if(tag=="inimigo"){
   estourarObjetos.Saverecord();
        // cntrlSaveMov=true;
         
   
   
   
   }*/
   
   
   }
   }




