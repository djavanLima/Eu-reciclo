#pragma strict
public static var instance:sonMDlivre;
var fundoMusic:AudioClip;
var estBal:AudioClip;
var estouro:AudioClip;
public enum gameSound{

fundo,
estouro,
toque,


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
public static function PlaySound(sonAtual:gameSound){// som que toca nao interfere em outro
switch(sonAtual){
 case gameSound.toque:
 instance.audio.PlayOneShot(instance.estBal);
 break;
 case gameSound.estouro:
 instance.audio.PlayOneShot(instance.estouro);
 
 break;







}


}