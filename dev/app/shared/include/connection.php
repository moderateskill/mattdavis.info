<?php

// Create session
session_start();

// Credentials
$servername = "localhost";
$username = "root";
$password = "94RwMDEY*!H$!D6pRGnq";
$dbname = "absolute_inventory";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die(" - Connection failed: " . $conn->connect_error);
}

// Post data
$postData = file_get_contents("php://input");
$request = json_decode($postData);

// Output Array
$outputArray = array();

// UNIX time
$serverUNIX = time();

function databaseInsert($sql, $conn)
{
    // Execute Query & Output
    if ($conn->query($sql) === true) {
        $value["success"] = true;
        return $value;
    } else {
        $value["success"] = false;
        $value["error"] = " - SQL Error: " . $sql . " - Reason: " . $conn->error;
        return $value;
    }
}
