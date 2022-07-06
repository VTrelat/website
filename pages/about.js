import React from "react";
import AboutElement from "../components/AboutElement.js";

const aboutSection = (
    <div>
        <p>
            <a className="about-attribute">firstname:</a> <a>"Vincent",</a>
        </p>
        <p>
            <a className="about-attribute">lastname:</a> <a>"Trélat",</a>
        </p>
        <p>
            <a className="about-attribute">age:</a>{" "}
            <a className="about-attribute-int">22</a>,
        </p>
        <p>
            <a className="about-attribute">description:</a>
            <p>
                "Je suis passionné par l'informatique et la programmation depuis
                mon enfance. Étant issu d'une culture imprégénée de la logique
                mathématique, je me suis toutefois dirigé vers un domaine de
                l'informatique théorique qui s'éloigne un peu de la
                programmation :{" "}
                <a style={{ fontWeight: "bold" }}>les méthodes formelles.</a>
            </p>
            <br />
            <p>
                Les méthodes formelles sont des techniques permettant de
                raisonner rigoureusement, à l'aide de la logique, sur un
                programme informatique, afin de démontrer sa validité par
                rapport à une certaine spécification. Elles reposent sur la
                sémantique des programmes, c'est-à-dire sur des descriptions
                mathématiques formelles du sens d'un programme donné par son
                code."
            </p>
        </p>
    </div>
);

const contactSection = (
    <div>
        <p>
            <a className="about-attribute">email:</a>{" "}
            <a style={{ position: "relative", left: "-25px" }}>
                "vincent.trelat@depinfonancy.net",
            </a>
        </p>
        <p>
            <a className="about-attribute">phone:</a>{" "}
            <a>"+33 7 68 20 72 01",</a>
        </p>
        <p>
            <a className="about-attribute">linkedin:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://www.linkedin.com/in/vincent-trélat/"
            >
                vincent-trélat
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">github:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://github.com/VTrelat"
            >
                VTrelat
            </a>
        </p>
    </div>
);

const projectSection = <div>Empty</div>;

const About = () => {
    const out = (
        <main className="about-container">
            <div class="about-box">
                <ul id="first-list">
                    <AboutElement title=".about()" content={aboutSection} />
                    <AboutElement title=".contact()" content={contactSection} />
                    <AboutElement
                        title=".projects()"
                        content={projectSection}
                    />
                </ul>
            </div>
        </main>
    );
    return out;
};

export default About;

{
    /* <li>
                        <span></span>
                        <div class="title">.about()</div>
                        <div class="info">
                            {"{"}
                            <br />
                            <p style={{ paddingLeft: "30px" }}>
                                Some random text is written here. It says
                                absolutely nothing but decorates the page.
                            </p>
                            {"}"}
                        </div>
                        <div class="time">
                            <span>
                                <a>dates=</a>
                                <br />
                                JUN, 17<sup>th</sup>
                            </span>
                            <span>12:00 AM</span>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div class="title">.contact()</div>
                        <div class="info">
                            Some random text is written here. It says absolutely
                            nothing but decorates the page. Some random text is
                            written here. It says absolutely nothing but
                            decorates the page.
                        </div>
                        <div class="time">
                            <span>
                                JUN, 29<sup>th</sup>
                            </span>
                            <span>11:36 AM</span>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div class="title">.getContact()</div>
                        <div class="info">
                            Some random text is written here. It says absolutely
                            nothing but decorates the page. Some random text is
                            written here. It says absolutely nothing but
                            decorates the page. Some random text is written
                            here. It says absolutely nothing but decorates the
                            page. Some random text is written here. It says
                            absolutely nothing but decorates the page.
                        </div>
                        <div class="time">
                            <span>
                                FEB, 2<sup>nd</sup>
                            </span>
                            <span>02:00 PM</span>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div class="title">.projects()</div>
                        <div class="info">
                            Some random text is written here. It says absolutely
                            nothing but decorates the page. Some random text is
                            written here. It says absolutely nothing but
                            decorates the page. Some random text is written
                            here. It says absolutely nothing but decorates the
                            page. Some random text is written here. It says
                            absolutely nothing but decorates the page.
                        </div>
                        <div class="info">
                            Some random text is written here. It says absolutely
                            nothing but decorates the page. Some random text is
                            written here. It says absolutely nothing but
                            decorates the page. Some random text is written
                            here. It says absolutely nothing but decorates the
                            page. Some random text is written here. It says
                            absolutely nothing but decorates the page.
                        </div>
                        <div class="time">
                            <span>
                                FEB, 2<sup>nd</sup>
                            </span>
                            <span>02:00 PM</span>
                        </div>
                    </li> */
}
