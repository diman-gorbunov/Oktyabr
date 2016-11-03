<?php
require_once 'ConcreteClass1.php';

class ConcreteClass2 extends AbstractClass
{
    protected $a;

    public function getValue() {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }

    public function getSomethink() {
        $this -> a = 2;
        return $this -> a;
    }
};
?>