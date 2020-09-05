#pragma strict
var hit:RaycastHit;
var raio:Ray;
function Start () {

}

function Update () {

	
	
	
	   if(Input.GetMouseButtonDown(0)){
     
       raio=camera.ScreenPointToRay(Input.mousePosition);
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
                            
                                        
                            if (hit.collider.CompareTag("btVoltar")){
                        
        Application.LoadLevel("menu");
      
          
                           }
        
                                            //entrar no experimento
      
                
       }
      }


    
  }
	
	
	
	
	
	
	
	

}
