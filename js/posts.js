$(document).ready(function(){
  // AJAX Call
  $.ajax({
    method : 'GET',
    url : 'api/posts.php',
    success : function(data) {
      var data = JSON.parse(data);
      var posts = '';
      for(var i = 0; i < data.length; i++) {
        posts += `<div class='post'>
          <span>Post ID : ${data[i].id}</span> <br/>
          <span>User ID : ${data[i].userId}</span> <br/>
          <span>Title : ${data[i].title}</span> <br/>
          <span>Body : ${data[i].body}</span> <br/>
        </div>`;
        // console.log(data[i].id, data[i].userId, data[i].title, data[i].body);
      }

      // Displaying all the posts into the DOM
      $('#posts').html(posts);
    }
  });
});
