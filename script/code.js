const   api_key="api_key=GMg5tbTmfRwlCGLgyWd0DSZ8yTC4fvrG",
        api_url_base="https://api.giphy.com/v1/gifs",
        api_trending_endpointt="/trending",
        api_search_endpoint="/search",
        api_search_tag="tag=",
        api_limit="limit=3",
        api_rating="rating=g",
        gifs_container=document.querySelector('.trending-slider-contenedor .trending-slider-box')
        
const get_gifs= ()=>{

    fetch(`${api_url_base}${api_trending_endpointt}?${api_key}&${api_limit}&${api_rating}`)
    .then(res=>res.json())
    .then(res=>{
        const gifs=res.data
        for (const gif of gifs) {
             get_gifs_url(gif.bitly_gif_url)
        }
       
    }).catch(error=>console.error(error))
}
get_gifs()

const listen=()=>{



}