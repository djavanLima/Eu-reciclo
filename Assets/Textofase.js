#pragma strict
private var modificar:TextMesh;
function Start () {
modificar=GetComponent(TextMesh);

}

function Update () {
if(PlayerPrefs.GetInt("cntrlfase")==1){
modificar.text=" Fase 1: Faça 200 \n pontos para \n desbloquear a \n próxima fase.";
}
if(PlayerPrefs.GetInt("cntrlfase")==2){
modificar.text=" Fase 2: Faça 200 \n pontos para \n desbloquear a \n próxima fase.";
}
if(PlayerPrefs.GetInt("cntrlfase")==3){
modificar.text=" Fase 3: Faça 200 \n pontos para \n desbloquear a \n próxima fase.";
}
if(PlayerPrefs.GetInt("cntrlfase")==4){
modificar.text=" Fase 4: Faça 200 \n pontos para \n vencer o jogo.";
}
modificar.text=GetComponent(TextMesh).text.Replace("\\n","\n");

}