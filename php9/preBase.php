<?php
require_once 'Base.php';

class preBase extends Base {
    public $b;

    public function __construct ($b){
        $this -> b = $b;
    }
};
?>