import React from "react";
import AboutElementList from "../components/AboutElement.js";

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
                "I have been passionate about computer science and programming
                since my childhood. As I come from a culture steeped in
                mathematical logic, I have however turned towards a theoretical
                field of computer science that is a little different from
                programming:{" "}
                <a style={{ fontWeight: "bold" }}>formal methods</a>.
            </p>
            <br />
            <p>
                Formal methods are techniques which allow to reason rigorously,
                using logic, on a computer program, in order to prove its
                correctness with respect to a certain specification. They are
                based on the semantics of programs, that is, on formal
                mathematical descriptions of the meaning of a program given by
                its code."
            </p>
        </p>
    </div>
);

const contactSection = (
    <div>
        <p>
            <a className="about-attribute">email:</a> <br />
            <a
                className="about-attribute-email"
                href="mailto:vincent.trelat@depinfonancy.net"
            >
                "vincent.trelat@depinfonancy.net"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">phone:</a>{" "}
            <a href="tel:+33 7 68 20 72 01" className="about-attribute-link">
                "+33 7 68 20 72 01"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">linkedin:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://www.linkedin.com/in/vincent-trélat/"
            >
                "vincent-trélat"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">github:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://github.com/VTrelat"
            >
                "VTrelat"
            </a>
        </p>
    </div>
);

const aocSection = (
    <div>
        <p>
            <a className="about-attribute">title:</a>{" "}
            <a className="about-attribute-link" href="https://adventofcode.com">
                "Advent of Code 2021"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">description:</a>
            <br />
            <a>
                "Advent of Code is an annual set of Christmas-themed computer
                programming challenges that follow an Advent calendar. The
                programming puzzles cover a variety of skill sets and skill
                levels and can be solved using any programming language.
                <br />
                Participants also compete based on speed on both global and
                private leaderboards. Puzzles consist of two parts that must be
                solved in order, with the second part not revealed to the user
                until the first part is solved correctly.
                <br />
                As I am French, the problems were released at 6am, so I got up
                at 5:45 am every morning from December 1st to 25th."
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">numberOfParticipants:</a>{" "}
            <a className="about-attribute-int">235135</a>,
        </p>
        <p>
            <a className="about-attribute">bestRank:</a>{" "}
            <a className="about-attribute-int">261</a>,
        </p>
        <p>
            <a className="about-attribute">averageRank:</a>{" "}
            <a className="about-attribute-int">2023</a>,
        </p>
        <p>
            <a className="about-attribute">worstRank:</a>{" "}
            <a className="about-attribute-int">7535</a>
        </p>
        <p>
            <a className="about-attribute">languages:</a>
            <br />
            <a>["JavaScript", "TypeScript", "Go", "Python"]</a>
        </p>
    </div>
);

const tarjanSection = (
    <div>
        <p>
            <a className="about-attribute">title:</a>
            <br />
            <a>
                "Formal verification in Isabelle(HOL) of an algorithm for
                computing strongly connected components"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">affiliation:</a>{" "}
            <a className="about-attribute-link" href="https://www.loria.fr/en/">
                "Loria (University of Lorraine, Inria)"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">location:</a> <a>"Nancy, France"</a>,
        </p>
        <p>
            <a className="about-attribute">supervisor:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://members.loria.fr/Stephan.Merz/"
            >
                Stephan Merz
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">repository:</a>{" "}
            <a
                className="about-attribute-link"
                href="https://github.com/VTrelat/Tarjan"
            >
                "github.com/VTrelat/Tarjan"
            </a>
        </p>
    </div>
);

const clearsySection = (
    <div>
        <p>
            <a className="about-attribute">title:</a>
            <br />
            <a>
                "Formal verification in B of the security of the real-time
                execution aspects of the Clearsy Safety Platform"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">affiliation:</a>{" "}
            <a className="about-attribute-link" href="https://www.clearsy.com">
                "Clearsy"
            </a>
            ,
        </p>
        <p>
            <a className="about-attribute">location:</a>{" "}
            <a>"Aix-en-Provence, France"</a>,
        </p>
        <p>
            <a className="about-attribute">supervisor:</a>{" "}
            <a
                className="about-attribute-link"
                href="http://daviddeharbe.github.io/"
            >
                David Déharbe
            </a>
        </p>
    </div>
);

const homepageSection = (
    <a
        href="../"
        style={{
            textDecoration: "none",
            color: "#caefce",
            textShadow: "0 0 5px #7b897d",
        }}
    >
        <div>
            <p>
                <a className="about-attribute">title:</a>
                <br />
                <a>"Home Page"</a>,
            </p>
            <p>
                <a className="about-attribute">description:</a>{" "}
                <a>"Click here to come back to the homepage."</a>
            </p>
        </div>
    </a>
);

const About = () => {
    const out = (
        <main className="about-container">
            <div class="about-box">
                <ul id="first-list">
                    <AboutElementList
                        title=".contact()"
                        content={[contactSection]}
                    />
                    <AboutElementList
                        title=".about()"
                        content={[aboutSection]}
                    />
                    <AboutElementList
                        title=".projects()"
                        content={[clearsySection, tarjanSection, aocSection]}
                    />
                    <AboutElementList
                        title={
                            <a
                                href="../"
                                style={{
                                    textDecoration: "none",
                                    color: "#2bcb2b",
                                }}
                            >
                                .homepage()
                            </a>
                        }
                        content={[homepageSection]}
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
