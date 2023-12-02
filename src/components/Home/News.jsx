import React, { useEffect, useState } from 'react'
import '../css/News.scss'
import envConf from '../../conf/env.config';
import axios from 'axios';

export default function News({dateNTime}) {
    const [newsData, setNewsData] = useState({});

    useEffect(()=> {
        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news', {
            headers: {
                Authorization : envConf.newsApiKey
            }
        })
        .then((response)=> {
            if(response.data && response.data.status==="ok") {
                const randomNews = Math.floor(Math.random() * response.data.articles.length);
                setNewsData(response.data.articles[randomNews]);
            }
        })
        .catch(()=> setNewsData({content: "Error Occured!"}))

    }, [])

  return (
    <div className='news'>
        <div className="news-cover" style={{backgroundImage: `url(${newsData.urlToImage})`}}>
            <div>
                <h3>{newsData.title}</h3>
                <p>{dateNTime.date} | {dateNTime.time}</p>
            </div>
        </div>
        <div className="news-content">
            <p>{newsData.content && newsData.content.substring(0, newsData.content.lastIndexOf("["))}</p>
            <a href={newsData.url} target='blank'>Read More</a>
        </div>
    </div>
  )
}
