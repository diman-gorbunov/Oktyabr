<?php
class Base {
    function funct() {
        echo "<h2>Функция базового класса</h2>";
    }
    function base_funct() {
        $this->funct();
    }
};
?>