#pragma strict

var myCamera: GameObject;
var lerpSmoothing: float = 5;
private var photonView: PhotonView;
private var isAlive: boolean;
private var position: Vector3;
private var rotation: Quaternion;

function Start() {
	photonView = GetComponent(PhotonView);
	
	if(photonView.isMine) {
		myCamera.SetActive(true);
		GetComponent(Motor).enabled = true;
		GetComponent(Rigidbody).useGravity = true;
		
		var arb: AntiRollBar[];
		arb = GetComponentsInChildren.<AntiRollBar>();
		for(var bar: AntiRollBar in arb) {
			bar.enabled = true;
		}
	}
	else {
		Alive();
	}
}

function OnPhotonSerializeView(stream: PhotonStream, info: PhotonMessageInfo) {
	if(stream.isWriting) {
		stream.SendNext(transform.position);
		stream.SendNext(transform.rotation);
	}
	else {
		position = stream.ReceiveNext();
		rotation = stream.ReceiveNext();
	}
}

function Alive() {
	while(isAlive) {
		transform.position = Vector3.Lerp(transform.position, position, Time.deltaTime * lerpSmoothing);
		transform.rotation = Quaternion.Lerp(transform.rotation, rotation, Time.deltaTime * lerpSmoothing);
	}
}