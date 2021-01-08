<?php
namespace Abiodun\Watermark\Repository;

use Ajaxray\PHPWatermark\Watermark;

class Document
{
    const FILE_DIRECTORY = 'docs/';
    const FILE_OUTPUT = 'output-';
    const FILE_STAMP = 'stamp-';
    const FILE_IMAGE_OUTPUT = 'document-image-output.png';

    public function get(string $fileName)
    {
        // $watermark = new Watermark(self::FILE_DIRECTORY . $fileName);
        // $path = self::FILE_DIRECTORY . self::FILE_IMAGE_OUTPUT;
        // $this->removeDocumentImage();
        return self::FILE_DIRECTORY . $fileName;
        // return $watermark->withText('', $path);
    }

    public function removeDocumentImage()
    {
        $path = self::FILE_DIRECTORY;
        // get all filenames
        $files = glob($path ."/document-image-output-[!0-1].png");
        foreach($files as $file) { // iterate files
            if(is_file($file)) {
                unlink($file); // delete file
                var_dump($file . "is deleted");
            }
        }
    }
}