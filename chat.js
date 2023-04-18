// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9932vJMvIBTG8Bb_lN2aTXwErYJbMlwU",
    authDomain: "letschatweb-app-312a3.firebaseapp.com",
    databaseURL: "https://letschatweb-app-312a3-default-rtdb.firebaseio.com",
    projectId: "letschatweb-app-312a3",
    storageBucket: "letschatweb-app-312a3.appspot.com",
    messagingSenderId: "608613824219",
    appId: "1:608613824219:web:db49649b372475f5113efe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    
}

firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});



