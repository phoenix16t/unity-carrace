#pragma strict

var myCamera: GameObject;
private var photonView: PhotonView;

function Start () {
	photonView = GetComponent(PhotonView);
	
	if(photonView.isMine) {
		myCamera.SetActive(true);
		GetComponent(Motor).enabled = true;
	}
	else {
	}
}