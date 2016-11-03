<meta charset="utf-8">
<?php
require_once 'preBase.php';

$b = new Base();
$d = new preBase();

$b->base_funct();
$d->funct();
$d->base_funct();
?>