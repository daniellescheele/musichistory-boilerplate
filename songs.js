
var listLink = document.getElementById("listLink");
var addLink = document.getElementById("addLink");
var listView = document.getElementById("listView");
var addMusicView = document.getElementById("addMusicView")

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");
  addMusicView.classList.add("visible");
  addMusicView.classList.remove("hidden");
});

listLink.addEventListener("click", function() {
	addMusicView.classList.add("hidden");
	listView.classList.add("visible");
	listView.classList.remove("hidden");
});

var song = [];
var addButton = document.getElementById("addInput");
addButton.addEventListener("click", function() {
		var songInput = document.getElementById("songTitleInput").value;
		var artistInput = document.getElementById("artistInput").value;
		var albumInput = document.getElementById("albumInput").value;
		song = "<h2>" + songInput + "</h2>" + "<p>" + artistInput + albumInput + "</p>" ;
		var div = document.getElementById("songList");
		div.innerHTML+= song;

		console.log(song);
});



// songInput.addEventListener("keyup",function() {
// 	songInput = songInput.event();
// 	console.log(songInput);
// })





 // function setAongArray(userInput) {
	// 	var songs = [
	// 	[songInput, artistInput, albumInput]
	// 	songs.push(userInput);
	// 	}
	// };