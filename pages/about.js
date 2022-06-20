const About = () => (
    <main>
        <h1 id="about-title">Contact</h1>
        <div className="about-container">
            <div class="md-prose">
                <docs-cards>
                    <a>
                        <docs-card>
                            <h3>
                                <img
                                    id="icon"
                                    src="http://simpleicon.com/wp-content/uploads/phone-1.png"
                                />
                            </h3>
                            <a>+33 7 68 20 72 01</a>
                        </docs-card>
                    </a>
                    <a>
                        <docs-card>
                            <h3>
                                <img
                                    id="icon"
                                    src="http://simpleicon.com/wp-content/uploads/mail-5.png"
                                />
                            </h3>
                            <a href="mailto:vincent.trelat@depinfonancy.net">
                                vincent.trelat@depinfonancy.net
                            </a>
                        </docs-card>
                    </a>
                    <a href="https://www.linkedin.com/in/vincent-trélat/">
                        <docs-card>
                            <h3>
                                <img
                                    id="icon"
                                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                                />
                            </h3>
                            <a href="https://www.linkedin.com/in/vincent-trélat/">
                                Vincent Trélat
                            </a>
                        </docs-card>
                    </a>
                    <a href="https://github.com/VTrelat/">
                        <docs-card>
                            <h3>
                                <img
                                    id="icon"
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                />
                            </h3>
                            <a href="https://github.com/VTrelat/">VTrelat</a>
                        </docs-card>
                    </a>
                </docs-cards>
                <a className="back-button" href="../">
                    Home page
                </a>
            </div>
        </div>
    </main>
);

export default About;
