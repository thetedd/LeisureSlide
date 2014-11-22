#pragma strict


var why : Vector3;
var toMove : Vector3;



function Start () {

}



function FixedUpdate () {
	var forceFactorX : int = 18; //18
	var forceFactorY : int = 30; //25
	
	

	toMove = Vector3.zero;
	toMove.x = Input.acceleration.x;
	toMove.z = Input.acceleration.y;
	toMove.x *= forceFactorX;
	toMove.z *= forceFactorY;
	
	rigidbody.AddRelativeForce(toMove);
}




/*
function OnCollisionEnter (col : Collision) {
	target = col.gameObject.name;
	/*if(col.gameObject.name == "Cylinder") {
		Destroy(col.gameObject);
		
	}*/
//}*/
