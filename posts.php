<?php
  include "get-data.php";

  $apiURL = 'https://jsonplaceholder.typicode.com/posts';
  echo getData($apiURL); // JSON data
?>