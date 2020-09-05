#pragma strict
public static var instance:sonMFase1;
var fundoMusic:AudioClip;
var estBal:AudioClip;

public enum gameSom{

fundo,
estouro,



}

function Start () {
instance=this;

}

function Update () {
if(Menu().SomEstate==false){
GetComponent(AudioSource).audio.mute=true;

}
else{

GetComponent(AudioSource).audio.mute=false;
}
}
public static function PlaySound(sonAtual:gameSom){// som que toca nao interfere em outro
switch(sonAtual){
 case gameSom.estouro:
 instance.audio.PlayOneShot(instance.estBal);

 break;







}


}