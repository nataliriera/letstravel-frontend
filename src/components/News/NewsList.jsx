import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from '../News/NewsItem'
import './newsitem.css'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1256a0d06a484858ab7307c5d3342b41`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div class='news-list-outer-div'>
        <div class="news-list">
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        author={article.author}
                        publishedAt={article.publishedAt}
                    />
                )
            })}
            
        </div>
        <a href="#demo">
  <div class="box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</a>
        </div>
    )
}

export default NewsList