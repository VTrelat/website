const About = () => (
    <body>
        <h1>About</h1>
        <div className="about-container">
            <div class="md-prose">
                <docs-cards>
                    <a>
                        <docs-card>
                            <h3>Phone</h3>
                            <a>+33 7 68 20 72 01</a>
                        </docs-card>
                    </a>
                    <a>
                        <docs-card>
                            <h3>Email</h3>
                            <a href="mailto:vincent.trelat@depinfonancy.net">
                                vincent.trelat@depinfonancy.net
                            </a>
                        </docs-card>
                    </a>
                    <a href="https://www.linkedin.com/in/vincent-trélat/">
                        <docs-card>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/vincent-trélat/">
                                Vincent Trélat
                            </a>
                        </docs-card>
                    </a>
                    <a href="https://github.com/VTrelat/">
                        <docs-card>
                            <h3>GitHub</h3>
                            <a href="https://github.com/VTrelat/">VTrelat</a>
                        </docs-card>
                    </a>
                </docs-cards>
            </div>
        </div>
    </body>
);

export default About;
