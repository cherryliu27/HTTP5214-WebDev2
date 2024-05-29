// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"; //firebase database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYvYUdH-ZQKF7fSJklqLpMN1C0O0cQU8",
  authDomain: "humber-sandbox-43623.firebaseapp.com",
  projectId: "humber-sandbox-43623",
  storageBucket: "humber-sandbox-43623.appspot.com",
  messagingSenderId: "93298777713",
  appId: "1:93298777713:web:bd280c0cc451c365f305d0",
  measurementId: "G-ER0W44LKTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "messages"); //create reference to messages collection and specify the string of which data we want

onValue(
  messages,
  (snapshot) => {
    console.log(snapshot);

    const ul = document.getElementById("messages");

    ul.replaceChildren(); //reset and clear list before anything in database changes so it wont continue to add on to the list with repeated values

    snapshot.forEach((childSnapShot) => {
      console.log(childSnapShot.key);
      console.log(childSnapShot.val());

      const childData = childSnapShot.val();

      const text = document.createTextNode(
        childData.message + " ~ " + childData.name
      );
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);
    });
  } //copy of the messages data at the time of the event
); //this function will run everytime it receives a database (once data changes and is fetched)
