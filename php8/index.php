<?php
require_once 'ChildOfBase.php';
$obj= new Base(2,3);
$obj -> suma();
echo $obj->rezultat;

echo "</br>";

$obj= New preBase (5,3);
$obj -> umnozhenie();
echo $obj->rezultat;
?>