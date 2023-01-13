import "./styles.css";





const AnimeItem=(props)=>{
    const{id,image,title,airingstatus,rank,rating,url}=props
    console.log(props,'anime-item-props');


    return(
        <div className="item" key={id}>
            <img className="image" src={image} alt ={title}/>
            <ul className="description">
                <li><i class="fa-solid fa-ranking-star"> rank: {rank} </i></li>
                <li><i class="fa-solid fa-star">rating: {rating} </i></li>
                <li><i class="fa-solid fa-eye">status: {airingstatus}</i></li>
                <li><i class="fa-solid fa-link">url: </i><a href={url}>myanimelist/{title}</a></li>
            </ul>
            <div className="titlename">{title}</div>
        </div>
    )

}

export default AnimeItem;
