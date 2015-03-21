#pragma strict

var roomName = "VVR";
var playerPrefabName = "Car";
var spawnPoint: Transform;
private var VERSION = "v0.0.1";

function Start() {
	PhotonNetwork.ConnectUsingSettings(VERSION);
}

function OnJoinedLobby() {
	var roomOptions: RoomOptions = new RoomOptions();// { isVisible = false, maxPlayers = 4 };
	PhotonNetwork.JoinOrCreateRoom(roomName, roomOptions, TypedLobby.Default);
}

function OnJoinedRoom() {
	PhotonNetwork.Instantiate(playerPrefabName, spawnPoint.position, spawnPoint.rotation, 0);
}