#pragma strict
 
 function Start () {


}

function Update () {

   
	
}
var distance:float=10;//arrastar com o mouse
  function OnMouseDrag(){
  if(MovimentoObj.pause==0){
//  Debug.Log("clicou");
  var posMouse= new Vector3(Input.mousePosition.x,Input.mousePosition.y,distance);
  var objPos=Camera.main.ScreenToWorldPoint(posMouse);
  transform.position=objPos;
  }
  }