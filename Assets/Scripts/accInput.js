#pragma strict


var why : Vector3;
var toMove : Vector3;

function Start () {

}



function FixedUpdate () {
	var forceFactorX : int = 18;
	var forceFactorY : int = 25;
	
	

	toMove = Vector3.zero;
	toMove.x = Input.acceleration.x;
	toMove.z = Input.acceleration.y;
	toMove.x *= forceFactorX;
	toMove.z *= forceFactorY;
	
	rigidbody.AddRelativeForce(toMove);
}


function OnGUI () {
	GUI.Box (Rect (10,10,100,90), toMove.ToString());
}

