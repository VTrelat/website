import React from "react";
import AboutElement from "../components/AboutElement.js";

const About = () => {
    const out = (
        <main className="about-container">
            <div class="about-box">
                <ul id="first-list">
                    <AboutElement title=".about()" content="Some raw content" />
                    <AboutElement
                        title=".contact()"
                        content="Some random text is written here. It says
                                absolutely nothing but decorates the page."
                    />
                    <AboutElement
                        title=".projects()"
                        content="Some random text is written here. It says absolutely
                            nothing but decorates the page. Some random text is
                            written here. It says absolutely nothing but
                            decorates the page. Some random text is written
                            here. It says absolutely nothing but decorates the
                            page. Some random text is written here. It says
                            absolutely nothing but decorates the page."
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
