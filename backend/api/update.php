<?php
require './config/db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->title) == '' || (int)$request->status < 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $title = mysqli_real_escape_string($con, trim($request->title));
  $description = mysqli_real_escape_string($con, trim($request->description));
  $status = mysqli_real_escape_string($con, (int)$request->status);

  // Update.
  $sql = "UPDATE `note` SET `title`='$title', `description`='$description', `status`='$status' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>