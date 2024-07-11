import React from 'react'
import './Section2.css'

const Section2 = () => {

    return (
        <div className='homeSection2' >
            <div className='homeSection2Left' >
                <h1 className='homeSection2title' >Did you know us?  </h1>
                <p className='homeSection2Des' >We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight.
                    If you are about books, you must to subscribe to our newsletter. </p>
                <form action="/">
                    <input type="text" name="" id="" placeholder='Your name' />
                    <div className="homeSection2Line"></div>
                    <input type="text" name="" id="" placeholder='Your e-mail' />
                    <div className="homeSection2Line"></div>
                </form>
                <button className='homeSection2Subscribe' type="button">Subscribe</button>
            </div>
            <div className="homeSection2Right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53228344544!2d36.20049406303567!3d33.50744822525799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2sus!4v1718895617085!5m2!1sen!2sus" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}


export default Section2