import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOtG2lsdHaIvybsYSX4B-no9CId9818pU",
  authDomain: "hot-burgers-9bc79.firebaseapp.com",
  databaseURL: "https://hot-burgers-9bc79-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
