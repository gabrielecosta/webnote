<?php
/**
 * Returns the list of notes.
 */
require './config/db.php';

$notes = [];
$sql = "SELECT * FROM note";

if($result = mysqli_query($con,$sql))
{
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
}
else
{
  http_response_code(404);
}

?>