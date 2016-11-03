<?php
require_once 'MyClass.php';
for ($objs=array(),$i=0;$i<6;$i++)
    $objs[]= new MyClass();
echo "now created {$objs[0]->getCount()} objects.</br>";
$objs[5]=null;
echo "and now - {$objs[0]->getCount()} objects.</br>";
$objs=array();
echo "finally we have - ".MyClass::getCount()." objects.</br>";
?>