import axios from "axios";
import envConf from "../conf/env.config";
import { useState, useEffect } from "react";

const newsAPIURL = 'https://text-ease.vercel.app/superapp/get/news';

export default function useNewsInfo() {
    const [newsData, setNewsData] = useState({});
    const [error, setError] = useState(false);
    const [laoding, setLoading] = useState(true);
    
        useEffect(()=> {
            axios.get(newsAPIURL, {
                headers: {
                    Authorization : envConf.newsApiKey
                }
            })
            .then((response)=> {
                if(response.data && response.data.status==="ok") {
                    const randomNews = Math.floor(Math.random() * response.data.articles.length);
                    setNewsData(response.data.articles[randomNews]);
                } else new Promise.reject()
            })
            .catch(()=> setError(true))
            .finally(()=> setLoading(false))
        }, [])

    return [newsData, error, laoding];

}
