import React, {Fragment} from 'react'
import '../css/Home.css'

const Home = () => {
  return (
    <Fragment>
        <section className="home">
            <div className='container'>
                <h1>We construct <br/> dreams</h1>
                <p>Every moment in a business happens only once. The next Bill Gates will not build an operating system. </p>

                <div className="link">
                    <a href='#' className='explore'>Explore</a>
                    <a href='#' className='contact'>Contact Us</a>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home