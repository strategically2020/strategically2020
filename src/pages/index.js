import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Strategically"
                    meta={[
                        { name: 'description', content: '' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Original Kettlebell</h3>
                                <p>High quality UK made kettlebells. </p>
                            </header>
                            <a href="https://originalkettlebell.com/" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Want Make</h3>
                                <p>Paint by numbers kits for adults and kids.</p>
                            </header>
                            <a href="https://wantmake.co/" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Strategically Build Companies</h2>
                            </header>
                            <p>
                  We believe something magical happens when you keep the band together for the long haul. We’re creating many products that solve simple problems. Why? We’re creative people by nature who thrive by constantly building.</p>

                    <ul className="actions">
                                <li><Link to="#contact" className="button next">Get Started</Link></li>

                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
