const   api_key="GMg5tbTmfRwlCGLgyWd0DSZ8yTC4fvrG",
        api_url_base="https://api.giphy.com/v1/gifs",
        api_trending_endpointt="/trending",
        api_Search_endpoint="/search",
        api_limit=10,
        api_rating="g"
        
        
const get_gifs= ()=>{

    fetch(`${api_url_base}${api_trending_endpointt}?${api_key}&${api_limit}&${api_rating}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    }).catch(error=>console.error(error))