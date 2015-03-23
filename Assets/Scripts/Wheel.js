#pragma strict

@script RequireComponent(WheelCollider);
@SerializeField private var tire: Transform;
private var TIRE_NAME: String = "Tire";
private var wc: WheelCollider;

function Awake() {
	wc = GetComponent(WheelCollider);
	tire = transform.FindChild(TIRE_NAME);
}

function Move(value: float) {
	wc.motorTorque = value;
}

function Turn(value: float) {
	wc.steerAngle = value;
	tire.localEulerAngles = new Vector3(0f, value, 90f);
}