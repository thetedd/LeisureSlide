#pragma strict



//debug var
//var target : String = "none";


function Start () {
	transform.position.y = .4;
}

function Update () {

}


function OnTriggerEnter(col : Collider) {
	//target = col.gameObject.name;
	renderer.enabled = false;
	//if (col.gameObject.name == "Droplet") {
	//	Destroy(this);
	//}
}

/*
function OnGUI () {
	GUI.Box (Rect (30,10,100,90),target); //toMove.ToString()
}
*/
