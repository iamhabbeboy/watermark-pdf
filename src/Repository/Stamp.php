<?php
namespace Abiodun\Watermark\Repository;

use Abiodun\Watermark\Abstract\FileAbstract;

class Stamp extends FileAbstract
{
    const FILE_DIRECTORY = 'docs/';
    const FILE_OUTPUT = 'output-';
    const FILE_STAMP = 'stamp-';

    public function get(string $fileName)
    {
        return self::FILE_DIRECTORY . $fileName;
    }
}