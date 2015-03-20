#pragma strict

var wheel: Wheel[];

function FixedUpdate () {
	var torque = Input.GetAxis("Vertical") * 30f;
	
	//front wheel drive
	wheel[0].Move(torque);
	wheel[1].Move(torque);
}