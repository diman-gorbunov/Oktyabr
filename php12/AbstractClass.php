<?php
abstract class AbstractClass {

    abstract protected function getValue();
    abstract protected function prefixValue($prefix);
    abstract protected function getSomethink();

    public function printOut() {
        print $this->getValue() . "\n";
    }

    public function somethink() {
        print $this->getSomethink() * $this->getSomethink();
    }
};
?>