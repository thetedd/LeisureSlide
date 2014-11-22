#pragma strict


var undead : boolean = true;

//debug var
//var target : String = "none";


function Start () {
	transform.position.y = .4;
}

function Update () {

}

//at FIRST trigger hide and increment score, then do nothing on subsequent
function OnTriggerEnter(col : Collider) {
	//target = col.gameObject.name;
	if (undead) {
		renderer.enabled = false;
		undead = false;
		
		var droplet : GameObject = GameObject.Find("Droplet");
		droplet.GetComponent(accInput).incrementScore();
		droplet.GetComponent(accInput).reward();
	}
	//if (col.gameObject.name == "Droplet") {
	//	Destroy(this);
	//}
}

/*
function OnGUI () {
	GUI.Box (Rect (30,10,100,90),target); //toMove.ToString()
}
*/

