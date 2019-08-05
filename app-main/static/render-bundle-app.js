(function () {
  var newElem = document.createElement('div');
  var bundleAppElem = document.getElementById('bundleApp');
  bundleAppElem.appendChild(newElem);
  BundleApp.render(newElem);  
})();
