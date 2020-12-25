#!
# Add a watermark to a PDF file
#
# first argument: the filename
# second argument: the watermark text (default "watermark")

filename=$1
watermark=$2

if [ x$2 == x ]; then watermark="watermark"; fi

cat > /tmp/watermark.ps << HERE
<<
   /EndPage
   {
     2 eq { pop false }
     {
         gsave
         0.5 .setopacityalpha
         /Helvetica_Bold 120 selectfont
         .65 setgray 130 70 moveto 50 rotate ($watermark) show
         grestore
         true
     } ifelse
   } bind
>> setpagedevice
HERE

gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=watermarked_$filename /tmp/watermark.ps $filename