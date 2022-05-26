import { useEffect, useState } from "react";
import iexApi from "../../modules/iexApi";
import NewsArticle from "./NewsArticle";

const NewsAPI = ({symbol}) => {
    const [newsData, setNewsData] = useState([]);
    const numberOfArticles = 3;

    //get news data from API

    useEffect(()=>{
        const fetchNewsData = async (symbol) => {
            let data = await iexApi.getLatestNews(symbol,numberOfArticles);
            setNewsData(data);
        }

        fetchNewsData(symbol);
        
    },[symbol])


    return(
        <section className="latest-news">
            <h3>Latest News</h3>
            <ul className="news-articles">
                {
                    newsData? 
                        newsData.map(article => {
                            return(
                                <li key={`${article.datetime}_${article.source}`}>
                                    <NewsArticle
                                        source={article.source}
                                        dateTime={article.datetime}
                                        dateType="ms"
                                        headline={article.headline}
                                        summary={article.summary}
                                        imgSrc={article.image}
                                        url={article.url}
                                    />
                                </li>
                            )
                        })
                    :
                        <li>loading news...</li>
                }
            </ul>
        </section>
    )
}

export default NewsAPI;