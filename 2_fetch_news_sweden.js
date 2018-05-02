

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
url = `https://newsapi.org/v2/everything?q=sweden&language=fr&sortBy=relevancy&from=2018-04-01&apiKey=${key}`

const recievedNews2 = (newsdata) => {
    const articlesDiv = document.querySelector(".fyrlingar")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article, index) => {
      if( index <3){
      //Here we create HTML elements that we add to our HTML file
      const div = document.createElement("div")
      div.className = "nyhet"
      div.innerHTML = `<h2>${article.title}</h2>`
      articlesDiv.appendChild(div)

      const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)

			const description = document.createElement("p")
				description.innerHTML = article.description
				div.appendChild(description)

			const link = document.createElement("a")
					link.href = article.url
					link.innerHTML = "Read more"
					div.appendChild(link)
    }})
}
fetch(url)
  .then(response => response.json())
  .then(recievedNews2)
