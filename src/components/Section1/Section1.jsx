import axios from 'axios'
import { Link } from "react-router-dom";
import './Section1.css'
import { useState, useEffect } from 'react'




const Section1 = () => {

    const [info, setinfo] = useState([])

    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books?_limit=8")
            .then((json) => { setinfo(json.data) })
    }, [])



    return (
        <div>
            <h1 className='section1select' >Selected for you</h1>
            <div className='section1' >

                {info?.map((element, index) => {
                    return (
                        <div key={index} className="Section1Card">
                            <div className="Section1CardImg">
                                <img className='section1bookimg' src={element.image_url} alt="" />
                            </div>
                            <p className='title' >{element.authors}</p>
                            <div className="information">
                                <p >  <img src="/images/iconbook.png" alt="" /> {element.num_pages} </p>
                                <p ><img src="/images/star.png" alt="" /> {element.rating} </p>
                            </div>
                            <div className="Section1Show">
                            
                                {/* <button><Link to={"/show"} state={{ from: element.id }} */}
                                <button><Link to="/show" state={element.id}
                                > Show Details  </Link></button>
                            </div>

                        </div>
                    )
                })}

            </div>


        </div>
    )
}

export default Section1