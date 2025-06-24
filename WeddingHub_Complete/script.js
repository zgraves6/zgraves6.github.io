function loadWeddingQuote() {
  fetch('https://api.quotable.io/random?tags=love|wedding')
    .then(response => response.json())
    .then(data => {
      const quoteBox = document.getElementById('quoteBox');
      quoteBox.innerHTML = `"${data.content}" — <strong>${data.author}</strong>`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quoteBox').innerText = "Could not load quote.";
    });
}

document.addEventListener('DOMContentLoaded', loadWeddingQuote);