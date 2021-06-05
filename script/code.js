"use strict"

const   api_key="api_key=GMg5tbTmfRwlCGLgyWd0DSZ8yTC4fvrG",
        api_url_base="https://api.giphy.com/v1/gifs",
        api_trending_endpointt="/trending",
        api_search_endpoint="/search",
        api_search_tag="tag=",
        api_limit="limit=3",
        api_rating="rating=g",
        gifs_container=document.querySelector('.trending-slider-contenedor .trending-slider-box'),
        listen_izq=document.querySelector('#trending-btn-previous'),
        listen_der=document.querySelector('#trending-btn-next')
        

        // Se crean funciones para la lecturas de eventos en los botones IZQ o DER.
const listen_id= (id_name,funcion_acive)=>{
    const id_element= document.querySelector(`#${id_name}`)
    id_element.addEventListener('click',funcion_acive)
}

// para hacer el paso de los gif en la home page podemos hacer el div externo con un overflow : hiden y luego ir cambiando la posicion de los elemento entro de ese vida asi podemos ponerle animacion y tambien controlar lo que se ve en la pantalla principal

const listen_class= (class_name,funcion_acive)=>{
    const class_elements= document.querySelectorAll(`.${class_name}`)
    for (const class_element of class_elements) {
        class_element.addEventListener('click',funcion_acive)
    }
}

const _fech_app_process=(url, funtion_action)=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        for (let index = 0; index < res.data.length; index++) {
            // console.log(res.data[index].bitly_url)

            funtion_action(res.data[index].images.original.url  )
        }  
    }).catch(error=>console.error(error))
}
const show_previous_gif=()=>{
    console.log("show gif")
}
const get_gifs_url= url =>{
    const content=`
    <div class="trending-slider" id="trending-slider">
        <img src="${url}" alt="img_gifs"></img>
    </div>
    `
    gifs_container.insertAdjacentHTML("afterbegin",content)
}

const get_gifs= ()=>{
    const url=`${api_url_base}${api_trending_endpointt}?${api_key}&${api_limit}&${api_rating}`
    _fech_app_process(url,get_gifs_url)
}

get_gifs()

listen_id("trending-btn-previous",show_previous_gif)
listen_id("trending-btn-next",show_previous_gif)
