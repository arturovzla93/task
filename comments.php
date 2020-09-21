<?php
  include "get-data.php";

  $apiURL = 'https://jsonplaceholder.typicode.com/posts/5/comments';
  echo getData($apiURL); // JSON data
?>