document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to your backend API
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend
      console.log(data);
      // You can display a message or perform further actions here
    })
    .catch((error) => {
      console.error('API request error:', error);
    });
});

    
  