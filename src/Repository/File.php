<?php
/**
 * Watermark lib 
 */
namespace Abiodun\Watermark\Repository;
/**
 * Undocumented class
 *
 * Description
 *
 * @package Watermark
 * @author  Azeez Abiodun Solomon <iamhabbeboy@gmail.com>
 */
class File
{
    private $files;
    private $output;
    private $path;
    private $name;
    private $size;
    private $temporaryPathName;
    private $fileHandler;
    
    /**
     * Undocumented function
     *
     * @since Undocumented function
     *
     * @return Undocumented function
     */
    public function __construct(array $files)
    {
        $this->files = $files;
        $this->name = time() . strrchr($this->files['name'], '.');
        $this->size = $this->files['size'];
        $this->temporaryPathName = $this->files['tmp_name'];
    }

    public function setConfig($config) : void
    {
        $this->path = $config::FILE_DIRECTORY;
        $this->output = $config::FILE_OUTPUT;
        $this->fileHandler = $config;
    }

    private function store() : void
    {
        if (!file_exists($this->path)) {
            //create directory
            // mkdir($this->path);
            // then continue
        }
        move_uploaded_file($this->temporaryPathName, $this->path . $this->name);
    }


    public function save(): string
    {
        $this->store();
        return $this->fileHandler->get($this->name);
    }
}