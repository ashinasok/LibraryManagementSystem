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
$('#save_button').click(function() {
  var BookName = $('#bookname').val();
  rootRef.push({
    BookName:$('#bookname').val(),
    AuthorName:$('#authorname').val(),
    PublisherName:$('#publishername').val(),
    IssueDate:$('#issuedate').val(),
    Copies:$('#noofcopies').val(),
    Category:$('#category').val(),
    Comments:$('#comments').val()
  });
  alert("Book Added");
  $('#bookname').val('');
  $('#authorname').val('');
  $('#publishername').val('');
  $('#issuedate').val('');
  $('#noofcopies').val('');
  $('#category').val('');
  $('#comments').val('');
})
