#pragma strict
var i:int;
var tempo:float;
function Start () {

}

function Update () {

}
function FixedUpdate(){

tempo+=0.01;
if(tempo>1){
gameObject.renderer.enabled=!gameObject.renderer.enabled;
tempo=0;



}

}