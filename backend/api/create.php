<?php
require './config/db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->title) === '' || (int)$request->status < 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $title = mysqli_real_escape_string($con, trim($request->title));
  $description = mysqli_real_escape_string($con, trim($request->description));
  $status = mysqli_real_escape_string($con, (int)$request->status);


  // Create.
  $sql = "INSERT INTO `note`(`id`,`title`,`description`,`status`) VALUES (null,'{$title}','{$description}','{$status}')";

  if(mysqli_query($con,$sql)) {
    http_response_code(201);
    $note = [
      'title' => $title,
      'description' => $description,
      'status' => $status,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($note);
  } else {
    http_response_code(422);
  }
}

?>