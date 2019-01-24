
let container = document.getElementById("container")
let heading = document.createElement("h1")
heading.textContent = "MY FAVORITE MOVIES"
heading.setAttribute("id", "heading")
container.appendChild(heading)

let greatMovies = [
  {
    name: "The Matrix",
    releaseDate: 1999,
    url: "https://www.imdb.com/title/tt0133093/?ref_=nv_sr_1"
  },
  {
    name: "Equilibrium",
    releaseDate: 2002,
    url: "https://www.imdb.com/title/tt0238380/?ref_=nv_sr_1"
  },
  {
    name: "The Sixth Sense",
    releaseDate: 1999,
    url: "https://www.imdb.com/title/tt0167404/?ref_=nv_sr_1"
  },
  {
    name: "The Wraith",
    releaseDate: 1986,
    url: "https://www.imdb.com/title/tt0092240/?ref_=fn_al_tt_1"
  }
]

greatMovies.forEach(function (movieEntries) {
  const cardContainer = document.createElement("div")

  let title = document.createElement("h2")
  title.textContent = movieEntries.name
  title.setAttribute("id", "title")

  let release = document.createElement("span")
  release.setAttribute("id", "title")
  release.textContent = movieEntries.releaseDate

  let link = document.createElement('a')
  link.setAttribute("href", movieEntries.url)
  link.setAttribute("target", "_blank")
  link.textContent = "Check it out"

  container.appendChild(cardContainer)

  cardContainer.appendChild(title)
  cardContainer.appendChild(release)
  cardContainer.appendChild(link)
})
