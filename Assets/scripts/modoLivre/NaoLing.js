#pragma strict

function Start () {

}

function Update () {

}


public static function nLgns(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
            gameOver.nomeLing="logo";
  gameOver.refLing=" Nao e linguagem de pro-\ngramação";
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       Debug.Log("oi mo");
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;*/
   
      }

}



public static function nLgnsFase1(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
            gameOver.nomeLing="logo";
  gameOver.refLing=" Nao e linguagem de pro-\ngramação";
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   */
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
    gameOver.nomeLing="a+";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="apl";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="autolisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="lisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="afnix";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="alice";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="bistro";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="f1";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="ActionScritp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Eiffel";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="F#";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Fatom";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
      }

}


public static function nLgnsFase2(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
            gameOver.nomeLing="logo";
  gameOver.refLing=" Nao e linguagem de pro-\ngramação";
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       Debug.Log("oi mo");
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;*/
   
      }

}






public static function nLgnsFase3(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
            gameOver.nomeLing="logo";
  gameOver.refLing=" Nao e linguagem de pro-\ngramação";
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       Debug.Log("oi mo");
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
    gameOver.nomeLing="a+";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="apl";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="autolisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="lisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="afnix";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="alice";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="bistro";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="f1";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="ActionScritp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Eiffel";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="F#";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Fatom";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   */
   
      }

}

public static function nLgnsFase4(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
            gameOver.nomeLing="logo";
  gameOver.refLing=" Nao e linguagem de pro-\ngramação";
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       Debug.Log("oi mo");
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   */
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
    gameOver.nomeLing="a+";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="apl";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="autolisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="lisp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação formal";
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="afnix";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="alice";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="bistro";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="f1";
  gameOver.refLing=" E uma linguagem de pro-\ngramação funcional";
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="ActionScritp";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Eiffel";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   
   gameOver.nomeLing="F#";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   gameOver.nomeLing="Fatom";
  gameOver.refLing=" E uma linguagem de pro-\ngramação Orientada a \n Objeto";
   break;
   
      }

}