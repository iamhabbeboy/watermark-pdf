import { ImageRenderer } from '../classes/imageRenderer.class';

class PdfImagePreview {
  loader: any;
  pageRender: any;
  PAGE_SCALE: any;
  CANVAS_DIMENSION: string;
  PAGE_NUMBER: number;
  renderImage: ImageRenderer;

  constructor(element: Element, imageRender: ImageRenderer) {
    this.PAGE_NUMBER = 1;
    this.PAGE_SCALE = 1.0;
    this.CANVAS_DIMENSION = '2d';

    this.loader = window['pdfjs-dist/build/pdf'];
    this.pageRender = element;
    this.renderImage = imageRender;
    this.loader.GlobalWorkerOptions.workerSrc = false;
  }

  getImage(filePath: string) {
    const getDocument = this.loader.getDocument(filePath);
    getDocument.promise.then((pdf) => this.getContent(pdf));
  }

  getContent(pdf: any) {
    return pdf.getPage(this.PAGE_NUMBER).then((page) => this.getPage(page));
  }

  getPage(page: any) {
    const viewPort = page.getViewport({ scale: this.PAGE_SCALE });
    const getContext = this.pageRender.getContext(this.CANVAS_DIMENSION);

    this.pageRender.width = viewPort.width;
    this.pageRender.height = viewPort.height;

    return this.renderPage(page, {
      viewport: viewPort,
      canvasContext: getContext
    });
  }

  renderPage(page: any, context: any) {
    return page
      .render(context)
      .promise.then(() => this.renderImage.get(this.pageRender));
  }
}

export { PdfImagePreview };
