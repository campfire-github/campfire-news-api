const express = require('express')
const path = require('path')
const NewsAPI = require('newsapi')

const app = express()

const newsapi = new NewsAPI('API_KEY')
newsapi.v2
  .topHeadlines({
    sources: 'bbc-news',
    language: 'en'
  })
  .then(response => {
    console.log(response)
  })

const port = process.env.PORT || 8080
app.listen(port)
console.log('Server running on localhost:' + port)
