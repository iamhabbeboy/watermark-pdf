!(function ($) {
  "use strict";

  const Watermark = {},
    MAX_FILE_SIZE = 2024,
    FILE_SIZE_TO_KILOBYTE = 1024;

  Watermark.init = function () {
    this.processUpload();
  };

  Watermark.http = function (payload) {
    return $.ajax({
      url: payload.url,
      method: payload.method || "POST",
      data: payload.data || {},
    });
  };

  Watermark.DOM = {
    delete: $(".btn-delete"),
    document: $("#document"),
    preview: $("#pdf-viewer"),
    list_files: $("#list-files"),
    upload: $("#upload-document"),
    modal: $("#file-preview-modal"),
  };

  Watermark.processUpload = function () {
    const that = this;
    this.DOM.upload.on("click", function (e) {
      e.preventDefault();
      that.DOM.document.click();
    });
    this.doneUpload();
  };

  Watermark.doneUpload = function () {
    let that = this;
    let $ul = $(".list-group");
    this.DOM.document.on("change", function (e) {
      if (this.files.length > 0) {
        const files = this.files;
        for (let [index, file] of Array.from(files).entries()) {
          const filesize = Math.ceil(file.size / FILE_SIZE_TO_KILOBYTE);
          if (filesize < MAX_FILE_SIZE) {
            that.listFile($ul, index, file);
            continue;
          }
          that.listFile($ul, index, "Max file size is 2MB.");
        }
      }
    });
    this.fileDelete();
  };

  Watermark.listFile = function ($parentElement, index, object) {
    const getFileType = typeof object,
      size = Math.ceil(object.size / 1024),
      title = getFileType === "object" ? object.name : object;
    let listElem =
      '<li class="list-group-item file-list file-event' + index + '">';
    listElem += "<h5>" + title + "</h5>";
    if (getFileType === "object") {
      listElem += '<div class="row">';
      listElem += '<div class="col-md-10">';
      listElem += "<p>Size: " + size + "KB</p></div>";
      listElem += '<div class="col-md-2">';
      listElem +=
        '<button class="btn btn-danger btn-delete">Delete &times;</button>';
      listElem += "</div>";
      listElem += "</div>";
      listElem += '<div class="file-toggle"></div>';
    }
    listElem += "</li>";

    $parentElement.append(listElem);
    this.fileDelete();
    this.filePreviewer(object, index);
  };

  Watermark.fileDelete = function () {
    this.DOM.delete.on("click", function () {
      $(this).parent().parent().parent().fadeOut("slow");
    });
  };

  Watermark.filePreviewer = function (file, index) {
    const that = this;
    $(`.file-event${index}`).on("click", function (e) {
      // let url = URL.createObjectURL(file);
      // const iframe = $("<iframe/>")
      //   .attr("src", url)
      //   .attr("width", "700")
      //   .attr("height", "400");
      // $("#file-preview-modal").find(".modal-body").html(iframe);
      that
        .http({
          url: "static/request.php",
          data: {
            test: "Hello world",
          },
        })
        .done(function (response) {
          console.log(response);
        })
        .fail(function (error) {
          console.log(error);
        });

      // that.DOM.modal.modal();
    });
  };

  Watermark.init();
})(jQuery);
