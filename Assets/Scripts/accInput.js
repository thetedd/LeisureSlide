#pragma strict


var why : Vector3;
var toMove : Vector3;
var score : int;
var scoreUp: int = 1;

var forceFactorX : int = 12; //18
var forceFactorY : int = 20; //30

var gs : GUIStyle;

function incrementScore() {
	score += scoreUp;
}

function reward () {
	forceFactorX += 2;
	forceFactorY += 4;
}

function Start () {
	gs = new GUIStyle();
	gs.fontSize = 35;
}



function FixedUpdate () {
	
	//another check to see if game end
	if (transform.position.y < -10) {
		Application.LoadLevel("androidtests");
	}
	

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
function OnGUI () {
	GUI.color = Color.blue;
	var scoreOutput : String = "Your score: " + score.ToString();
	GUI.Label(Rect(201, 0 , 200, 46), scoreOutput, gs);
}
