import React from 'react'
import './Show.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { ThemeContext } from './../../App'
const Show = () => {
    const [book, setbook] = useState([])
    const location = useLocation();
    const data = location.state;
    useEffect(() => {
        axios.get(`https://example-data.draftbit.com/books/${data}`)
            .then((json) => { setbook(json.data) })
    }, [])


    const theme = localStorage.getItem('theme')
    const [themee, setthemee] = useState()


    return (
        <div>
            <NavBar />
            <div className="showContainer">
                <div className="showLeft">
                    <img src={book.image_url} alt="" />
                </div>
                <div className="showRight">
                    <h1>{book.title}</h1>
                    <p>{book.authors}</p> <br />
                    <h3>About Book:</h3> <br />
                    <p className='showDescription' >{book.description}</p>
                    <img src="/images/quantity.svg" alt="" />
                    <button className='showAddToCart' >Add to cart</button>
                    <button className='showFav' >Favorite</button>
                    <div className="line"></div>
                    <div className="showInfo">
                        <span> <p>Pages Number :</p>  {book.num_pages}</span>
                        <span>   <p>Rating Count :  </p> {book.rating_count}</span>
                        <span>  <p>Reviews :</p>  {book.review_count}</span>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Show