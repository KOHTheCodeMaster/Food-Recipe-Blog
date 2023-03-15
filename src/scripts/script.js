// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server using an HTTP request
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Error submitting form.');
    }
  })
  .catch(error => {
    alert('Error submitting form.');
  });
});
