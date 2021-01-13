<?php
require_once '../vendor/autoload.php';
  
use Abiodun\Watermark\Repository\File;
use Abiodun\Watermark\Repository\Stamp;
use Abiodun\Watermark\Repository\Document;
use Abiodun\Watermark\Repository\WatermarkOutput;

if (isset($_FILES['document'])) {
    $file = new File($_FILES['document']);
    $file->setConfig(new Document());
    echo $file->save(); 
}

if (isset($_FILES['stamp'])) {
    $file = new File($_FILES['stamp']);
    $file->setConfig(new Stamp());
    echo $file->save();
}

if (isset($_GET['action']) && $_GET['action'] ==='position') {
    $output = new WatermarkOutput($_REQUEST);
    echo $output->get();
}