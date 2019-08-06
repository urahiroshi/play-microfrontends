(function () {
  var renderIfBundleAppDefined = function () {
    if (typeof BundleApp === 'undefined') {
      setTimeout(renderIfBundleAppDefined, 10);
    } else {
      var tagName = 'my-bundle-app';
      var constructor = document.createElement(tagName).constructor;
      if (constructor !== HTMLUnknownElement && constructor !== HTMLElement) {
        return;
      }
      class BundleAppElement extends HTMLElement {
        connectedCallback() {
          var mountPoint = document.createElement('div');
          this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
          BundleApp.render(mountPoint);
        }
      }
      customElements.define(tagName, BundleAppElement);
    }
  }
  renderIfBundleAppDefined();
})();
