<?php
namespace Abiodun\Watermark\Abstract;

abstract class FileAbstract
{
    abstract function get(string $fileName);
}