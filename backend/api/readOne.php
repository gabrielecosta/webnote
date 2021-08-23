<?php

require './config/db.php';

// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;
$notes = [];

if(!$id) {
  return http_response_code(400);
}

// SELECT ONE.
$sql = "SELECT * FROM `note` WHERE `id` ='{$id}' LIMIT 1";
if($result = mysqli_query($con,$sql)) {
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $notes[$i]['id']    = $row['id'];
    $notes[$i]['title'] = $row['title'];
    $notes[$i]['description'] = $row['description'];
    $notes[$i]['status'] = $row['status'];
    $i++;
  }
  echo json_encode($notes);
} else {
  http_response_code(422);
}

?>