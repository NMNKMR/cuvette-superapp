const envConf = {
    weatherApiKey: String(import.meta.env.VITE_WEATHER_APIKEY),
    newsApiKey: String(import.meta.env.VITE_NEWS_APIKEY),
    moviesApiKey: String(import.meta.VITE_MOVIES_APIKEY)
}

export default envConf