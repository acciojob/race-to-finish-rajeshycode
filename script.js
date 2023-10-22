window.promises = [];

// Function to create a promise with a random delay between 1 and 5 seconds
function createRandomPromise() {
  const delay = Math.floor(Math.random() * 5) + 1; // Random delay between 1 and 5 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} seconds`);
    }, delay * 1000);
  });
}

// Create and push five random promises to the `promises` array
for (let i = 0; i < 5; i++) {
  window.promises.push(createRandomPromise());
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    // Print the result to the div with the id 'output'
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
