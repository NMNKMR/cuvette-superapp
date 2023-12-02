const envConf = {
    weatherApiKey: String(import.meta.env.VITE_WEATHER_APIKEY),
    newsApiKey: String(import.meta.env.VITE_NEWS_APIKEY),
    moviesAccessToken: String(import.meta.env.VITE_MOVIES_TOKEN)
}

export default envConf