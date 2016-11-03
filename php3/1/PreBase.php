<?php
require_once 'Base.php';

class PreBase implements Base{

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