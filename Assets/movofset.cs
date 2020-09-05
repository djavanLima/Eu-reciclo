using UnityEngine;
using System.Collections;
public class movofset : MonoBehaviour {

	// Use this for initialization
	private Material currenteMaterial;
	public float speed;
	private float offSet;
	
	// Use this for initialization
	void Start () {
		currenteMaterial= GetComponent<Renderer>().material;
	}
	
	// Update is called once per frame
	void Update () {
		offSet+=speed*Time.deltaTime;
		currenteMaterial.SetTextureOffset("_MainTex",new Vector2(offSet,0));
	}
}
