function fetchDataWithCallback(callback) {
  setTimeout(() => {
    let error = true; // simulate an error condition

    try {
      if (error) {
        throw new Error("Fetch failed");
      }
      // success
      callback("Data fetched");
    } catch (err) {
      console.log("Error: Fetch failed");
    }
  }, 2000);
}