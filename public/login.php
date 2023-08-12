<?php

$username = $_POST['username'];
$password = $_POST['password'];


if ($username == 'randomX' && $password === '42568') {
    header('Location: /findlv6.php');
} else {
    header('Location: /ohiyo.html?noway');
}
?>