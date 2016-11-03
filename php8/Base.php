<?php
class Base {
    public $a, $b, $rezultat;

    public function __construct ($a,$b){
        $this -> a = $a;
        $this -> b = $b;
    }
    function suma () {
        $this -> rezultat = $this -> a + $this -> b;

    }
};
?>