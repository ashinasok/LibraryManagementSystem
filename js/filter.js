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
var sort = rootRef.orderByChild("BookName");
$('#data1_button').click(function(){
  $('#table_body tr').remove();
  sort.on("child_added", snap => {
    var BookName = snap.child("BookName").val();
    $("#table_body").append("<tr><td>" + BookName + "</td>");
})
})

$('#data2_button').click(function(){
  $('#table_body tr').remove();
  sort.on("child_added", snap => {
    var AuthorName = snap.child("AuthorName").val();
    $("#table_body").append("<tr><td>" + AuthorName + "</td>");
})
})
