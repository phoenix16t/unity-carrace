#pragma strict

@script RequireComponent(WheelCollider);

private var wc: WheelCollider;

function Awake() {
	wc = GetComponent(WheelCollider);
}

function Move(value: float) {
	wc.motorTorque = value;
}