var firebaseConfig = {
    apiKey: "AIzaSyALlebPOx0MNF1qOaEo7nqTyFwMnVhuFIo",
    authDomain: "kwiter-33835.firebaseapp.com",
    databaseURL: "https://kwiter-33835-default-rtdb.firebaseio.com",
    projectId: "kwiter-33835",
    storageBucket: "kwiter-33835.appspot.com",
    messagingSenderId: "378564276438",
    appId: "1:378564276438:web:282a44f067ca36b542d977"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    });});}
getData();
function redirectRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}