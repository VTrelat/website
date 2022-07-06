import React from "react";

const AboutElement = (props) => (
    <div class="info">
        {"{"}
        <br />
        <p style={{ paddingLeft: "30px" }}>{props.content}</p>
        {"}"}
    </div>
);

const AboutElementList = (props) => {
    const content = props.content.map((item, index) => (
        <AboutElement content={item} />
    ));
    return (
        <li>
            <span></span>
            <div class="title">{props.title}</div>
            {content}
        </li>
    );
};

export default AboutElementList;

{
    /* <li>
    <span></span>
    <div class="title">{props.title}</div>
    <div class="info">
        {"{"}
        <br />
        <p style={{ paddingLeft: "30px" }}>{props.content}</p>
        {"}"}
    </div>
    <div class="time">
        <span>
            {props.date ? props.month + ", " + props.day : ""}
            <sup>{props.day ? "th" : ""}</sup>
        </span>
    </div>
</li>; */
}
