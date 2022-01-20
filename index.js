const PORT = 5500

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const url = 'https://guardian.ng/'
axios(url)
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.headline', html).each(function () {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({
        title,
        url,
      })
    })
    console.log(articles)
  })
  .catch((error) => console.log(error))

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`)
})
