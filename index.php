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
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="jumbotron">
            <h1>Upload Document</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure voluptatem quisquam dolorum et facere nam autem? Ad, optio veniam. Temporibus animi odit, voluptas atque earum ipsam enim eius hic.</p>
            <button class="btn-primary btn btn-lg" id="upload-document">Click to upload + </button>
            <form action="" method="POST" enctype="multipart/form-data">
                <input type="file" id="document" name="document[]" multiple style="visibility:hidden">
            </form>
            <form method="POST" enctype="multipart/form-data">
            <input type="file" id="stamp" style="visibility:hidden;height:1px"/>
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
        <h5 class="modal-title" id="exampleModalLabel">Stamp Config</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="btn btn-info" id="upload-stamp">Add Stamp</button>
        <input type="range" value="1" min="0" max="1" step="0.1" id="get-opacity">
        <button id="generate-output" class="btn btn-sm btn-success">Download</button>
        <div id="preview" style="position: relative"></div>
      </div>
    </div>
  </div>
</div>
  
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- <script src="static/js/app.js"></script> -->
    <script src="static/dist/bundle.js"></script>
   
</body>
</html>