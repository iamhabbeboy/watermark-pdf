<?php
namespace Abiodun\Watermark\Repository;
use Ajaxray\PHPWatermark\Watermark;

class WatermarkOutput
{   
    private $opacity;
    private $fileName;
    private $stampPath;
    private $offsetPositionTop;
    private $offsetPositionLeft;
    const FILE_PATH_DIRECTORY = 'docs/';
    const OUTPUT_FILENAME = 'result.pdf';

    public function __construct(array $request)
    {
        $this->fileName = $request['filename'];
        $this->stampPath = $request['stamp'];
        $this->opacity = $request['opacity'];
        $this->offsetPositionTop = (int) $request['top'];
        $this->offsetPositionLeft = (int) $request['left'];
    }

    public function get()
    {
        $watermark = new Watermark($this->fileName);
        $watermark->setPosition(Watermark::POSITION_TOP_LEFT);
        // $watermark->setPosition(Watermark::POSITION_TOP);
        $watermark->setOffset(
            $this->offsetPositionLeft, $this->offsetPositionTop
        );
        $watermark->setOpacity($this->opacity);
        // $watermark->setTiled();
        return $watermark->withImage(
            $this->stampPath, self::FILE_PATH_DIRECTORY . self::OUTPUT_FILENAME ) ? self::FILE_PATH_DIRECTORY . self::OUTPUT_FILENAME : '';
    }
}