<?php

// Создадим изображение размером 55x30
$im = imagecreatetruecolor(100, 1000);
$red = imagecolorallocate($im, 255, 0, 0);
$black = imagecolorallocate($im, 0, 0, 0);

// Сделаем фон прозрачным
imagecolortransparent($im, $black);

// Нарисуем красный прямоугольник
imagefilledrectangle($im, 4, 4, 50, 25, $red);

// Сохраним изображение
imagepng($im, 'imagecolortransparent.png');
imagedestroy($im);

задание массива точек для многоугольника
$values = array(
   640,  550,  // Point 1 (x, y)
   620,  840, // Point 2 (x, y)
   660,  660,  // Point 3 (x, y)
   940,  620,  // Point 4 (x, y)
   650,  640,  // Point 5 (x, y)
   610,  610   // Point 6 (x, y)
);

// создание изображения
$image = imagecreatetruecolor(1925, 960);

// определение цветов
$bg   = imagecolorallocate($image, 0, 0, 0);
$blue = imagecolorallocate($image, 0, 0, 255);

// заливка фона
imagefilledrectangle($image, 0, 0, 249, 249, $bg);

// рисование многоугольника
imagefilledpolygon($image, $values, 6, $blue);
?>