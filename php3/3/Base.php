<?php
require_once 'C.php';

class Base implements C {
    public $rezultat;
    public function suma($a, $b)
    {
        $this->rezultat=$a+$b;
    }
    public function vivod()
    {
        return $this->rezultat;
    }
    public function obnulenie()
    {
        $this->rezultat=0;
        return $this->rezultat;
    }
}
?>