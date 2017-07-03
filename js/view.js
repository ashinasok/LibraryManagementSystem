// Initialize Firebase
var config = {
  apiKey: "AIzaSyBu4dc8MhbzHvYdNh4bYmwR_XAubBudom0",
  authDomain: "library-62ee3.firebaseapp.com",
  databaseURL: "https://library-62ee3.firebaseio.com",
  projectId: "library-62ee3",
  storageBucket: "library-62ee3.appspot.com",
  messagingSenderId: "328498753694"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref().child('Books');
rootRef.on("child_added", snap => {
  var BookName = snap.child("BookName").val();
  var AuthorName = snap.child("AuthorName").val();
  var PublisherName = snap.child("PublisherName").val();
  var IssueDate = snap.child("IssueDate").val();
  var Copies = snap.child("Copies").val();
  var Category = snap.child("Category").val();
  var Comments = snap.child("Comments").val();

  $("#table_body").append("<tr><td>" + BookName + "</td><td>"
    + AuthorName + "</td><td>"
    + Category + "</td><td>"
    + PublisherName + "</td><td>"
    + IssueDate + "</td><td>"
    + Copies + "</td><td>"
    + Comments + "</td></tr>");

});
