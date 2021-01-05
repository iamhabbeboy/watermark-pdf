<?php
require_once '../vendor/autoload.php';
  
use Ajaxray\PHPWatermark\Watermark;

define('FILE_PATH', 'docs/');
define('FILE_OUTPUT', 'output-');
define('FILE_STAMP', 'stamp-');

if (isset($_FILES['document'])) {
    $name = $_FILES['document']['name'];
    $tmp = $_FILES['document']['tmp_name'];
    // chmod("docs/", 755);
    if (file_exists(FILE_PATH)) {
        move_uploaded_file($tmp, FILE_PATH . $name);
        echo processStamp($name) ? FILE_PATH . $name : 'error';
    } else {
        echo "path not found";
    }
}

if (isset($_FILES['stamp'])) {
    $name = $_FILES['stamp']['name'];
    $tmp = $_FILES['stamp']['tmp_name'];

    if (file_exists(FILE_PATH)) {
        if (move_uploaded_file($tmp, FILE_PATH . FILE_STAMP . $name)) {
            echo FILE_PATH . FILE_STAMP . $name;
        } else {
            echo 'error';
        }
    } else {
        echo "path not found";
    }
}


if (isset($_GET['action']) && $_GET['action'] ==='position') {
    $top = (int) $_REQUEST['top'];
    $left = (int) $_REQUEST['left'];
    $filename = $_REQUEST['filename'];
    $stamp = $_REQUEST['stamp'];
    $opacity = $_REQUEST['opacity'];
    echo getFinalResult($filename, $left, $top, $opacity, $stamp) ? 'docs/result.png' : $filename;
}

if (isset($_GET['action']) && $_GET['action'] ==='test') {
    var_dump($_REQUEST);
}

function getFinalResult($filename, $left, $top, $opacity, $stamp) {
    // var_dump(ceil($top));
    // var_dump(ceil($left));
    $watermark = new Watermark($filename);
    $watermark->setPosition(Watermark::POSITION_TOP_LEFT);
    // $watermark->setPosition(Watermark::POSITION_TOP);
    $watermark->setOffset($left, $top);
    $watermark->setOpacity($opacity);
    // $watermark->setTiled();
    return $watermark->withImage($stamp, "docs/result.pdf");
}

/**
 * Undocumented function
 *
 * @since Undocumented function
 *
 * @return void
 */
function processStamp($name) 
{
    $watermark = new Watermark(FILE_PATH . $name);
    // $watermark->setPosition(Watermark::POSITION_TOP_RIGHT);
    // $watermark->setOffset(50, 50);
    // $watermark->setOpacity(1);
    // $watermark->setTiled();
    return $watermark->withText('', FILE_PATH. FILE_OUTPUT. 'abcdef.png');
}