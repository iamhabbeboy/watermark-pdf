!(function ($) {
  "use strict";

  const Watermark = {},
    MAX_FILE_SIZE = 4024,
    FILE_SIZE_TO_KILOBYTE = 1024,
    FILE_FORMATS = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

  Watermark.init = function () {
    this.processUpload();
  };

  Watermark.http = function (payload) {
    return $.ajax({
      url: payload.url,
      method: payload.method || "POST",
      data: payload.data || {},
      contentType: payload.contentType || false,
      processData: payload.processData || false,
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
    const that = this;
    let $ul = $(".list-group");
    this.DOM.document.on("change", function (e) {
      if (this.files.length > 0) {
        const files = this.files;
        for (let [index, file] of Array.from(files).entries()) {
          const filesize = Math.ceil(file.size / FILE_SIZE_TO_KILOBYTE);
          // console.log(
          //   FILE_FORMATS.includes("image/png"),
          //   file.type //||
          //   // file.type.indexOf("pdf") === -1
          // );
          if (filesize > MAX_FILE_SIZE) {
            that.listFile($ul, index, "Max file size is 2MB.");
          }
          // else if (
          //   FILE_FORMATS.includes(file.type) === false ||
          //   Boolean(file.type.indexOf("pdf") === -1)
          // ) {
          //   that.listFile($ul, index, "Invalid file format ");
          // }
          else {
            that.listFile($ul, index, file);
          }
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
      const documentFormData = new FormData();
      documentFormData.append("document", file);
      console.log(file.type);
      that
        .http({
          url: "static/request.php",
          data: documentFormData,
        })
        .done(function (response) {
          that.DOM.modal.modal();
          const dom = that.DOM.modal.find("#preview");
          dom.html("<img src='static/docs/output-abcdef.png' width='100%' />");
          let fileType = file.type === "application/pdf" ? "pdf" : "image";
          that.uploadStamp(response, fileType);
        })
        .fail(function (error) {
          console.log(error);
        });
    });
  };

  Watermark.processPdf = function (response, DOM) {
    DOM.html(
      `<iframe src="static/${response}" width="400" height="400"></iframe>`
    );
  };

  Watermark.processImage = function (response, DOM) {
    DOM.html(`<img src="static/${response}"/>`);
  };

  Watermark.uploadStamp = function (filename, filetype) {
    const that = this;
    $("#upload-stamp").click(function (e) {
      $("#stamp").click();
    });
    $("#stamp").on("change", function (e) {
      const file = this.files[0];
      const fd = new FormData();
      fd.append("stamp", file);
      that
        .http({
          url: "static/request.php?",
          data: fd,
        })
        .done(function (response) {
          const el = that.DOM.modal.find("#preview");

          const elem = $("<div/>");
          elem.css({
            "z-index": "10000",
            position: "absolute",
            top: "0px",
          });
          elem.attr("id", "draggable");
          elem.html("<img src='static/" + response + "' />");
          const el1 = $('<div class="resizer ne"/>');
          const el2 = $('<div class="resizer nw"/>');
          const el3 = $('<div class="resizer sw"/>');
          const el4 = $('<div class="resizer se"/>');

          elem.append(el1);
          elem.append(el2);
          elem.append(el3);
          elem.append(el4);
          el.append(elem);
          that.draggable(elem, filename, response, filetype);
        })
        .fail(function (error) {
          console.log(error);
        });
    });
  };

  Watermark.draggable = function (element, filename, stamp, filetype) {
    this.applyAction(element, filename, stamp, filetype);
    // element.addEventListener("mousedown", mousedown);
    element.mousedown(mousedown);
    const that = this;

    let currentResizer, isResizing;

    function mousedown(e) {
      $(window).mousemove(mousemove);
      $(window).mouseup(mouseup);
      let prevX = e.clientX;
      let prevY = e.clientY;

      function mousemove(e) {
        if (!isResizing) {
          let newX = prevX - e.clientX;
          let newY = prevY - e.clientY;
          const { left, top } = element.position();
          element.css("cursor", "move");
          element.css("left", left - newX + "px");
          element.css("top", top - newY + "px");
          prevX = e.clientX;
          prevY = e.clientY;
        }
      }

      function mouseup() {
        // window.removeEventListener("mousemove", mousemove);
        // window.removeEventListener("mouseup", mouseup);
        $(window).unbind("mousemove");
        $(window).unbind("mouseup");
      }

      const resizers = element.find(".resizer");
      for (let resizer of resizers) {
        console.log(resizer);
        resizer.mousedown(mousedown);

        function mousedown(e) {
          currentResizer = e.target;
          isResizing = true;

          let prevX = e.clientX;
          let prevY = e.clientY;
          // window.addEventListener("mousemove", mousemove);
          // window.addEventListener("mouseup", mouseup);
          $(window).mousemove(mousemove);
          $(window).mouseup(mouseup);

          function mousemove(e) {
            const { width, height, left, top } = element.position();
            if (currentResizer.classList.contains("se")) {
              element.css("width", width - (prevX - e.clientX) + "px");
              element.css("height", height - (prevY - e.clientY) + "px");
            } else if (currentResizer.classList.contains("sw")) {
              element.css("width", width + (prevX - e.clientX) + "px");
              element.css("height", height - (prevY - e.clientY) + "px");
              element.css("left", left - (prevX - e.clientX) + "px");
            } else if (currentResizer.classList.contains("ne")) {
              element.css("width", width - (prevX - e.clientX) + "px");
              element.css("height", height + (prevY - e.clientY) + "px");
              element.css("top", top - (prevY - e.clientY) + "px");
            } else {
              element.css("width", width + (prevX - e.clientX) + "px");
              element.css("height", height + (prevY - e.clientY) + "px");
              element.css("top", top - (prevY - e.clientY) + "px");
              element.css("left", left - (prevX - e.clientX) + "px");
            }
            prevX = e.clientX;
            prevY = e.clientY;
          }

          function mouseup() {
            $(window).unbind("mousemove");
            window.unbind("mouseup");
            isResizing = false;
          }
        }
      }
    }
  };

  Watermark.applyAction = function (element, filename, stamp, filetype) {
    $("#get-opacity").change(function () {
      $("#draggable").css("opacity", $(this).val());
    });
    $("#generate-output").on("click", function (e) {
      const opacity = $("#get-opacity").val();
      const { left, top } = element.position();
      // console.log(Math.ceil(top), left);
      $.ajax({
        url: "static/request.php?action=position",
        data: {
          top: top, //Math.ceil(top),
          left: left, //Math.ceil(left),
          filename: filename,
          stamp: stamp,
          opacity: opacity,
        },
      }).done(function (response) {
        console.log(response);
      });
    });
  };

  Watermark.init();
})(jQuery);
