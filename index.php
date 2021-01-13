<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stamp Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .file-list {
            cursor:pointer;
            transition: .4s all;
        }
        .file-list:hover {
            background-color: #EEE;
        }

        #file-preview-modal .modal-body {
            overflow:auto;
        }

        .resizer {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: black;
    z-index: 2;
}

.resizer.nw {
    top: -1px;
    left: -1px;
    cursor: nw-resize;
}

.resizer.ne {
    top: -1px;
    right: -1px;
    cursor: ne-resize;
}

.resizer.sw {
    bottom: -1px;
    left: -1px;
    cursor: sw-resize;
}

.resizer.se {
    bottom: -1px;
    right: -1px;
    cursor: se-resize;
}

#canvas-wrap { position:relative; width:800px; height:600px }
#canvas-wrap canvas { position:absolute; top:0; left:0; z-index:1;color: white; }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="jumbotron">
            <h1>Upload Document</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure voluptatem quisquam dolorum et facere nam autem? Ad, optio veniam. Temporibus animi odit, voluptas atque earum ipsam enim eius hic.</p>
            <button class="btn-primary btn btn-lg" id="upload-document">Click to upload + </button>
            <form action="" method="POST" enctype="multipart/form-data">
                <input type="file" id="document" name="document[]" multiple style="visibility:hidden" accept="application/pdf">
            </form>
            <form method="POST" enctype="multipart/form-data">
            <input type="file" id="stamp" style="visibility:hidden;height:1px" accept="image/*"/>
            </form>
            <div id="list-files">
                <ul class="list-group"></ul>
            </div>
            
    </div>
        </div>
    </div>
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="file-preview-modal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <div class="modal-header">
        <div class="modal-title" id="exampleModalLabel">
        <b>Stamp Config</b>
        <button class="btn btn-info" id="upload-stamp">Add Stamp</button>
        <input type="range" value="1" min="0" max="1" step="0.1" id="get-opacity">
        <input type="hidden" id="document-filename" />
        <button id="generate-output" class="btn btn-sm btn-success">Download</button>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="height:700px">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
        <div id="preview" style="position: relative"></div>
        <canvas id="canvas-render" style="height:1px;width:1px"></canvas>
      </div>
    </div>
  </div>
 
</div>
  
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/build/pdf.min.js"></script>
    <script>

// Loaded via <script> tag, create shortcut to access PDF.js exports.
// var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
// var loadingTask = pdfjsLib.getDocument('src/docs/1610042204.pdf');
// loadingTask.promise.then(function(pdf) {
//   // you can now use *pdf* here
//     pdf.getPage(1).then(function(page) {
//     // you can now use *page* here
//         var scale = 1.5;
//         var viewport = page.getViewport({ scale: scale, });
//         var canvas = document.getElementById('the-canvas');
//         var context = canvas.getContext('2d');
//         canvas.width = viewport.width;
//         canvas.height = viewport.height;

//         var renderContext = {
//             viewport: viewport,
//             canvasContext: context,
//         };
//         page.render(renderContext).promise.then(function() {
//             console.log("Hello ");
//         });
//     });
// });

// Asynchronous download of PDF
// var pdf = pdfjsLib.getDocument(url);
// // loadingTask.promise.then(function(pdf) {});
// pdf.getPage(1).then(function(page) {
//   // you can now use *page* here
//   var scale = 1.5;
//     var viewport = page.getViewport({ scale: scale, });

//     var canvas = document.getElementById('the-canvas');
//     var context = canvas.getContext('2d');
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     var renderContext = {
//     canvasContext: context,
//     viewport: viewport
//     };
//     page.render(renderContext);
// });


    </script>
    <!-- <script src="static/js/app.js"></script> -->
    <script src="static/dist/bundle.js"></script>
   
</body>
</html>