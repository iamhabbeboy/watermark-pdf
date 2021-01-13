<?php
namespace Abiodun\Watermark\Repository;

use Abiodun\Watermark\Abstract\FileAbstract;

class Document extends FileAbstract
{
    const FILE_DIRECTORY = 'docs/';
    const FILE_OUTPUT = '';

    public function get(string $fileName)
    {
        return self::FILE_DIRECTORY . $fileName;
    }

    public function removeDocumentImage()
    {
        $path = self::FILE_DIRECTORY;
        // get all filenames
        $files = glob($path ."/document-image-output-[!0-1].png");
        foreach($files as $file) { // iterate files
            if(is_file($file)) {
                unlink($file); // delete file
            }
        }
    }
}