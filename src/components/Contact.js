import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
            <form name="contact" input name="bot-field" type="hidden" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="hello@strategically.co">hello@strategically.co</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-legal"></span>
                        <h3>Legal Stuff</h3>
                        <span>Company Number: 11898834 <br />
                        VAT Number: 328 9819 52</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>454 Long Lane<br />
                        London, N2 8JL<br />
                        UK</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
