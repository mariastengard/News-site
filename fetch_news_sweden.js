const key = "bd5992415e9349d59c99a013a5f74c60"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
let url = `https://newsapi.org/v2/everything?q=sweden&language=en&sortBy=relevancy&from=2018-04-26&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".toppnyhet")
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
  }  })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
