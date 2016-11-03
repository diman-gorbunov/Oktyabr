<?php
require_once 'preBase.php';

$obj= New Base (15);
echo $obj -> a;
echo "</br>";
$objobj= New preBase (5);
echo $objobj -> b;
$tmp = $obj -> a;
$obj -> a = $objobj -> b;
$objobj -> b = $tmp;
echo "</br>";
echo $obj -> a;
echo "</br>";
echo $objobj -> b;
?>