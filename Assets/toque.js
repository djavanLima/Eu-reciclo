#pragma strict
var checkf:Animator;
var checkm:Animator;
var checkd:Animator;
var checksl:Animator;
var checksd:Animator;
private var dificuldade:int;
function Start () {

}

function Update () {

if(Menu.SomEstate==true){
checksl.SetBool("check",true);
checksd.SetBool("check",false);

}

if(Menu.SomEstate==false){
checksl.SetBool("check",false);
checksd.SetBool("check",true);

}



if(PlayerPrefs.GetInt("dificuldade")==1){
 checkf.SetBool("check",true);
 checkd.SetBool("check",false);
 checkm.SetBool("check",false);
}
if(PlayerPrefs.GetInt("dificuldade")==2){
  checkf.SetBool("check",false);
  checkm.SetBool("check",true);
 checkd.SetBool("check",false);
}
if(PlayerPrefs.GetInt("dificuldade")==3){
 checkf.SetBool("check",false);
  checkm.SetBool("check",false);
 checkd.SetBool("check",true);
}

}
function OnMouseDown(){


 
if(tag=="cdf"){
PlayerPrefs.SetInt("dificuldade",1);
}
if(tag=="cdm"){

 PlayerPrefs.SetInt("dificuldade",2);
}
if(tag=="cdd"){
 PlayerPrefs.SetInt("dificuldade",3);
}








}