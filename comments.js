$(document).ready(function(){
  // AJAX Call
  $.ajax({
    method : 'GET',
    url : 'api/comments.php',
    success : function(data) {
      var data = JSON.parse(data);
      var comments = '';
      for(var i = 0; i < data.length; i++) {
        comments += `<div class='comment'>
          <span>Comment ID : ${data[i].id}</span> <br/>
          <span>Post ID : ${data[i].postId}</span> <br/>
          <span>Name : ${data[i].name}</span> <br/>
          <span>E-mail : ${data[i].email}</span> <br/>
          <span>Body : ${data[i].body}</span> <br/>
        </div>`;
      }

      // Displaying all the posts into the DOM
      $('#comments').html(comments);
    }
  });
});