<?php
require_once 'extBase.php';

class preBase implements extBase{
    public $rezultat;

    public function suma($a, $b)
    {
        $this->rezultat=$a+$b;
    }
    public function vivod()
    {
        return $this->rezultat;
    }
}
?>