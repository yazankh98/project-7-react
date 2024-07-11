import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import Section2 from '../../components/Section2/Section2'
import Footer from '../../components/Footer/Footer'
import Section1 from '../../components/Section1/Section1'
const Home = () => {
    return (
        <div>
            <NavBar  />
            <Hero />
            <Section1 />
            <Section2 />
            <Footer />
        </div>
    )
}

export default Home