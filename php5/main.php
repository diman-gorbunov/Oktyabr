<?php
/*$string="Location: https://www.google.ru/";
Header($string);
headers_sent($filename, $linenum);
echo $filename;
echo $linenum;*/

/*function nocache() { 
Header("Expires: Thu, 19 Feb 1998 13:24:18 GMT"); 
Header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
Header("Cache-Control: no-cache, must-revalidate"); 
Header("Cache-Control: post-check=0,pre-check=0"); 
Header("Cache-Control: max-age=0"); 
Header("Pragma: no-cache");*/

/*$string="Content-type: text/plain ";
Header($string);
print_r(headers_list());*/

/*$headers = getallheaders(); 
Header("Content-type: text/plain"); 
print_r($headers);*/

/*setcookie("other", "Here, take a cookie.", time()+3600);
print_r ($_REQUEST);*/

$str = "sullivan=paul&names[roy]=noni&names[read]=tom";
parse_str($str, $out);
echo "<pre>";
print_r($out);
echo "</pre>";
?>