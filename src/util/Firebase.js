import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDx7FwQzhOEt-pPFuEy4CbwOPHZP5yD1jc",
	authDomain: "timetableapp-29311.firebaseapp.com",
	databaseURL: "https://timetableapp-29311-default-rtdb.firebaseio.com",
	projectId: "timetableapp-29311",
	storageBucket: "timetableapp-29311.appspot.com",
	messagingSenderId: "462970016445",
	appId: "1:462970016445:web:cab279cc507b9d0b71ddd4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
