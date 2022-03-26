import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../News/NewsItem";
import "./newsitem.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_58050cce056db297b7d89b4a8bbafd53b670&q=tech `
      );
      setArticles(response.data.results);
      console.log(response.data.results);

    };

    getArticles();
  }, []);
  return (
    <div className="news-list-outer-div">
      <div className="news-list">
        {articles.map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              link={article.link}
              source_id={article.source_id}
              pubDate={article.pubDate}
            />
         );
       })}
      </div>
      <a href="#demo">
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  );
};

export default NewsList;
