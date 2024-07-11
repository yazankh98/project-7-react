import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero' >
            <div className="heroLeft">
                <div className='heroAuthor' >
                    <p>Author of august</p>
                </div>
                <h1>Eric-Emanuel Schmitt </h1>
                <p className='heroTitle'>Eric-Emmanuel Schmitt has been awarded more than 20
                    literary prizes and distinctions, and in 2001 he received the
                    title of Chevalier des Arts et des Lettres. His books have
                    been translated into over 40 languages.</p>
                    <button className='heroViewBook' type="button">View his boooks</button>
            </div>
            
            <div className="heroRight">
            <img src="/images/book.png" alt="" />
            </div>
        </div>
    )
}

export default Hero