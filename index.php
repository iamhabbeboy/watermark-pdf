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
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae laudantium temporibus reiciendis perspiciatis ullam, repellendus enim minus, accusamus, velit illo? Maxime quos tempora, quas natus porro magni sequi. Dolores.</p>
      </div>
    </div>
  </div>
</div>
  
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="static/js/app.js"></script>
   
</body>
</html>