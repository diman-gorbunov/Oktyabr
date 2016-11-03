<meta charset="utf-8">
<?php
require_once 'Foo.php';

$classname = "Foo";

call_user_func(array($classname, 'say_hello'));
call_user_func($classname .'::say_hello'); // Начиная с версии 5.2.3

$myobject = new Foo();

call_user_func(array($myobject, 'say_hello'));

?>