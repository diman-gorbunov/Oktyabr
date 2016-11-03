<?php
class world {
	private $a,$b,$rezultat;
	function __construct($a,$b) {
		$this -> a = $a;
		$this -> b = $b;
	}
	function suma() {
		$this -> rezultat = $this -> a + $this -> b;
	}
	function vivod() {
		return $this -> rezultat;
	}
	function __destruct() {
	}
}
?>