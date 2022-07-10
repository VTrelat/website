import React from "react";
import TrackVisibility from "react-on-screen";

const TitleToggleOpacity = (props) => {
    const opacity = props.isVisible && props.isDragging ? 1 : 0;
    return (
        <h1 style={{ opacity: opacity, color: "white" }}>{props.content}</h1>
    );
};

export default TitleToggleOpacity;
