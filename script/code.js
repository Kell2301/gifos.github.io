"use strict"
let show_gif_numer=0,
    data_apy_length=0

const   api_key="api_key=GMg5tbTmfRwlCGLgyWd0DSZ8yTC4fvrG",
        api_url_base="https://api.giphy.com/v1/gifs",
        api_trending_endpointt="/trending",
        api_search_endpoint="/search",
        api_search_tag="tag=",
        api_limit="limit=30",
        api_rating="rating=g",
        gifs_container=document.querySelector('.trending-slider-contenedor .trending-slider-box'),
        listen_izq=document.querySelector('#trending-btn-previous'),
        listen_der=document.querySelector('#trending-btn-next'),
        set_izq_gif=document.querySelector("#trending-btn-previous a"),
        set_der_gif=document.querySelector("#trending-btn-next a")
        // console.log(set_der_gif)
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
            // Ver info del api
            // console.log(res.data[index])
           
            const data_fech= new Array(
                res.data[index].images.original.url,
                res.data[index].username, 
                res.data[index].title,
                index,
                res.data.length)

            funtion_action(data_fech)
            
            // console.log(res.data[index].title)
            
            
            // funcion para traer el gif por medio de video
            //funtion_action(res.data[index].images.original.mp4)
        }  
    }).catch(error=>console.error(error))
}


const show_gif=(next=0,previous=0,length)=>{

    show_gif_numer=show_gif_numer+(next+previous)

    if(length!=0 && typeof(length)!="undefined" && isNaN(length)===false){
        data_apy_length=length
    }

    if(show_gif_numer<0){
        show_gif_numer=data_apy_length-1
    }else if(show_gif_numer>=data_apy_length){
        show_gif_numer=0
    }

    // console.log(`Numero es: ${show_gif_numer}`)
    set_izq_gif.setAttribute("href", `#trending-slider-position_${show_gif_numer}`);
    set_der_gif.setAttribute("href", `#trending-slider-position_${show_gif_numer}`);

    

}
const show_next_gif=()=>{
    let next=1
    show_gif(next,0)
}
const show_previous_gif=()=>{
    let previous=(-1)
    show_gif(0,previous)  
}


const get_gifs_url_users_titles= data =>{
    // const conten=""
    const content=`
    <div class="trending-slider" id="trending-slider-position_${data[3]}">
        <img src="${data[0]}" alt="img_gifs"></img>
        <div class="trenging_slider_img_hover">
            <div class="btn_trenging_slider_imgs_content">
                <button class="btn_trenging_slider_box_img">
                    <img src="./assets/icon-fav.svg" alt="icon_favorito" class="icon_favorito icon">
                    <img src="./assets/icon-fav-active.svg" alt="icon_favorito_activo "
                        class="icon_favorito_activo icon icon_hiden">
                    <img src="./assets/icon-fav-hover.svg" alt="icon_favorito_hover"
                        class="icon_favorito_hover icon icon_hiden">
                </button>
                <button class="btn_trenging_slider_box_img">
                    <img src="./assets/icon-download.svg" alt="icon_download" class="icon_download icon">

                    <img src="./assets/icon-download-hover.svg" alt="icon_download_hover"
                        class="icon_download_hover icon icon_hiden">
                </button>
                <button class="btn_trenging_slider_box_img">
                    <img src="./assets/icon-max-normal.svg" alt="icon_max" class="icon_max icon">

                    <img src="./assets/icon-max-hover.svg" alt="icon_max_hover"
                        class="icon_max_hover icon icon_hiden">
                </button>
            </div>
            <div class="trenging_slider_img_user_title">
                <h2>${data[1]}</h2>
                <h2>${data[2]}</h2>
            </div>
        </div>
    </div>
    `
    // elemento content para hacerlo con el tag video
    // const content=`
    //     <div class="trending-slider" id="trending-slider">
    //         <video src="${url}" autoplay="true" loop="true"></video>
    //     </div>
    // `
    gifs_container.insertAdjacentHTML("beforeend",content)

    if(data[3]==0){
        show_gif(0,0,data[4])

    }
}

const get_gifs=()=>{
    const url=`${api_url_base}${api_trending_endpointt}?${api_key}&${api_limit}&${api_rating}`
    _fech_app_process(url,get_gifs_url_users_titles)
}

get_gifs()

listen_id("trending-btn-previous",show_previous_gif)
listen_id("trending-btn-next",show_next_gif)
