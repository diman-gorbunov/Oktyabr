<?php
require_once "Base.php";

$obj = new Base();
call_user_func_array(array(&$obj,"summa"),$arr);
echo call_user_func(array(&$obj,"showres"));
echo "</br>";
$arr = array(5,5);
call_user_func_array(array(&$obj,"umn"),$arr);
echo call_user_func(array(&$obj,"showres"));
echo "</br>";
$arr = array(5,5);
call_user_func_array(array(&$obj,"minus"),$arr);
echo call_user_func(array(&$obj,"showres"));
echo "</br>";
$arr = array(5,5);
call_user_func_array(array(&$obj,"delenie"),$arr);
echo call_user_func(array(&$obj,"showres"));
?>