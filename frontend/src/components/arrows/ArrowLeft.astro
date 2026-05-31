class VideoWidget extends HTMLElement {
  result: {
    width: number,
    height: number,
    html: string
  };
  canvasEl: HTMLElement;
  constructor() {
    super();
    this.init();
  }
  async init() {
    const oembedAttr = this.getAttribute('data-oembed');
    if (!oembedAttr) {
      this.renderError('Video unavailable');
      return;
    }

    try {
      this.result = JSON.parse(oembedAttr);
    } catch (e) {
      this.renderError('Video unavailable');
      return;
    }

    this.renderVideo();
  }

  renderError(message) {
    this.innerHTML = `<p>${message}</p>`;
  }

  renderVideo() {
    const shaker = document.createElement('div');
    shaker.innerHTML = this.result.html;
    const inner = shaker.firstChild;
    if (!(inner && (inner instanceof HTMLElement))) {
      throw new Error('First child must be an HTML element');
    }
    this.canvasEl = inner;
    this.innerHTML = '';
    if (!inner) {
      return;
    }
    inner.removeAttribute('width');
    inner.removeAttribute('height');
    this.append(inner);
    // wait for CSS width to be known
    setTimeout(() => {
      // If oembed results include width and height we can get the
      // video aspect ratio right
      if (this.result.width && this.result.height) {
        inner.style.width = '100%';
        this.resizeVideo();
        // If we need to initially size the video, also resize it on window
        // resize.
        window.addEventListener('resize', this.resizeHandler.bind(this));
      } else {
        // No, so assume the oembed HTML code is responsive.
      }
    }, 0);
  }
  resizeVideo() {
    this.canvasEl.style.height = ((this.result.height / this.result.width) * this.canvasEl.offsetWidth) + 'px';
  }
  resizeHandler() {
    if (document.contains(this)) {
      this.resizeVideo();
    } else {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}
customElements.define('video-widget', VideoWidget);