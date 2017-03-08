<?php

	$to = "bjo7@njit.edu";
	$subject= "Portfolio Message";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$headers = "From: $email" . "\r\n" . "CC: $name";

	$msg = "$message";
	$msg = wordwrap($message, 70, "\r\n");
	
	mail($to, $subject, $message, $headers);
	header('Location: index.html');
?>