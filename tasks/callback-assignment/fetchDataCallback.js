function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000);
}