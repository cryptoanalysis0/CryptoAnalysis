const apiKey = '8d046029316d297e21a5de6ad98c7461';
const url = `https://gnews.io/api/v4/search?q=crypto&lang=en&token=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("news-container");
    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "col-md-4";
      div.innerHTML = `
        <div class="card p-3">
          <h5><a href="${article.url}" target="_blank">${article.title}</a></h5>
          <p>${article.description || ''}</p>
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("news-container").innerHTML = "<p>Failed to load news.</p>";
    console.error(err);
  });