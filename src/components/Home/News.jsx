import React from 'react'
import '../css/News.scss'
import useNewsInfo from '../../Queries/useNewsInfo';

export default function News({dateNTime}) {
    const [newsData, error, loading] = useNewsInfo();

  return (
    <>
        {loading ? <div className='news loading'>Loading...</div> :
            !error ? 
            <div className='news'>
                <div className="news-cover" style={{ backgroundImage: `url(${newsData.urlToImage})` }}>
                    <div>
                        <h3>{newsData.title}</h3>
                        <p>{dateNTime.date} | {dateNTime.time}</p>
                    </div>
                </div>
                <div className="news-content">
                    <p>{newsData.content && newsData.content.substring(0, newsData.content.lastIndexOf("["))}</p>
                    <a href={newsData.url} target='blank'>Read More</a>
                </div>
            </div> : <div className='news error'>Error Occurred!</div>}
    </>
  )
}
