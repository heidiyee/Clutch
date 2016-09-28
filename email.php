<?php
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "emailaddress@clutch.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
?>
