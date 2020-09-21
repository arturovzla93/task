$(document).ready(function(){
  // AJAX Call
  $.ajax({
    method : 'GET',
    url : 'api/countries.php',
    success : function(data) {
      var data = JSON.parse(data);
      console.log(data);
      var countries = '';
      for(var i = 0; i < data.length; i++) {
        countries += `<div class='country'>
          <span>Country Name : ${data[i].name}</span> <br/>
          <img src=${data[i].flag} alt="Flag">
        </div>`;
      }

      // Displaying all the posts into the DOM
      $('#countries').html(countries);
    }
  });
});