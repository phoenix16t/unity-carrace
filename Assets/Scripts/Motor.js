#pragma strict

@script RequireComponent(Rigidbody);
var wheel: Wheel[];
var enginePower: float = 20f;
var turnPower: float = 20f;
var centerOfMass: Transform;

private var rbody: Rigidbody;

function Awake() {
	rbody = GetComponent(Rigidbody);
}

function Start() {
	rbody.centerOfMass = centerOfMass.localPosition;
}

function FixedUpdate() {
	var torque = Input.GetAxis("Vertical") * -enginePower;
	var turnSpeed = Input.GetAxis("Horizontal") * turnPower;
	
	//front wheel drive
	wheel[0].Move(torque);
	wheel[1].Move(torque);

	//rear wheel drive
//	wheel[2].Move(torque);
//	wheel[3].Move(torque);

	//front wheel steering
	wheel[0].Turn(turnSpeed);
	wheel[1].Turn(turnSpeed);
	
	//rear wheel steering
//	wheel[2].Turn(turnSpeed);
//	wheel[3].Tove(turnSpeed);
}