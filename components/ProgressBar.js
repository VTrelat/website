import React from "react";
import TrackVisibility from "react-on-screen";

const Bar = ({ progress }) => {
    const progressBar = {
        width: `${progress}%`,
    };
    return (
        <div className="progressbar">
            <div className="progressbar-background">
                <div className="progressbar-fill" style={progressBar} />
            </div>
        </div>
    );
};

const ProgressBarAnimated = (props) => {
    const progress = props.isVisible ? props.progress : 0;

    return <Bar progress={progress} />;
};

const ProgressBar = (props) => {
    const progress = props.progress;
    return (
        <TrackVisibility>
            <ProgressBarAnimated progress={progress} />
        </TrackVisibility>
    );
};

export default ProgressBar;
