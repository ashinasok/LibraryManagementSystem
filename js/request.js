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
var i = 0;
$('#request_button').click(function(){
  rootRef.on('value', gotData, errData);
  function gotData(data) {
    var elements = data.val();
    var keys = Object.keys(elements);
    if (i <= keys.length) {
      var k = keys[i];
      var BookName = elements[k].BookName;
      var AuthorName = elements[k].AuthorName;
      var PublisherName = elements[k].PublisherName;
      var IssueDate = elements[k].IssueDate;
      var Copies = elements[k].Copies;
      var Category = elements[k].Category;
      var Comments = elements[k].Comments;
      $('#bookname').val(BookName);
      $('#authorname').val(AuthorName);
      $('#publishername').val(PublisherName);
      $('#issuedate').val(IssueDate);
      $('#noofcopies').val(Copies);
      $('#category').val(Category);
      $('#comments').val(Comments);
      console.log($('#noofcopies').val());
      i++;
    }
    if ((i+1) > keys.length) {
      i = 0;
    }
  }
  function errData(err) {
    console.log("Error!");
    console.log(err);
  }
})
