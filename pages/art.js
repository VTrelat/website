import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const numberOfImages = 25;

const title = "Art & Photography";
const getURL = () => {
    let out = [];
    for (let i = 1; i <= numberOfImages; i++) {
        out.push(
            `https://raw.githubusercontent.com/VTrelat/website/main/img/art/0${i}_low.jpg`
        );
    }
    return out;
};

const renderImages = (images) => {
    let out = [];
    for (let url of images) {
        out.push(<img src={url} className="artpage-image" />);
    }
    return out;
};

const images = getURL().sort((a, b) => 0.5 - Math.random());

const Art = () => {
    const [pos, setPos] = useState({ x: 0, y: 0, scale: 15 });
    const [isDragging, setIsDragging] = useState(true);

    const imageRender = renderImages(images);

    const onScroll = (e) => {
        if (pos.scale === 1) {
            setIsDragging(false);
        } else if (pos.scale > 1) {
            setIsDragging(true);
        }
        const delta = e.deltaY * -0.005;
        const newScale = pos.scale + delta;

        const ratio = 1 - newScale / pos.scale;

        setPos({
            scale: newScale < 1 ? 1 : newScale > 15 ? 15 : newScale,
            x: pos.x,
            y: pos.y,
        });
    };

    const scrollingArrows = (
        <div
            className="artpage-arrows"
            style={{ marginTop: `${75 + 1.7 * (15 - pos.scale)}vh` }}
        >
            <div
                className="artpage-arrow"
                style={{ opacity: (pos.scale - 1) / 15 }}
            >
                {">>>"}
            </div>
        </div>
    );

    return (
        <main
            className="artpage"
            style={{
                height: isDragging && !isMobile ? "100vh" : "auto",
                overflow: isDragging && !isMobile ? "hidden" : "auto",
                color: "white",
            }}
        >
            <img
                className="artpage-header-image"
                src={
                    isMobile
                        ? "https://raw.githubusercontent.com/VTrelat/website/main/img/art/00_low.jpg"
                        : "https://raw.githubusercontent.com/VTrelat/website/main/img/art/00.jpg"
                }
                onWheelCapture={onScroll}
                style={{
                    height: "auto",
                    width: "100%",
                    transformOrigin: "49% 58%",
                    transform: !isMobile
                        ? `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`
                        : `none`,
                    mask: !isMobile
                        ? `linear-gradient(rgba(255,255,255,1) ${
                              55 * (1 - (pos.scale - 1) / 14)
                          }%, rgba(255,255,255,${(pos.scale - 1) / 14}))`
                        : `linear-gradient(rgba(255,255,255,1) 55%, rgba(255,255,255,0))`,
                }}
            />
            {isDragging && !isMobile ? scrollingArrows : null}
            <section
                className="artpage-title"
                style={{
                    opacity: isDragging && !isMobile ? "0" : "1",
                    marginTop: "5vh",
                    marginBottom: "10vh",
                    alignItems: "center",
                    width: "100%",
                    fontSize: !isMobile ? "6vw" : "3rem",
                    transition: "all .75s ease-in-out",
                }}
            >
                {title}
                <br />
                <a style={{ fontSize: "50%" }}>
                    {isMobile ? "(mobile version)" : "(desktop version)"}
                </a>
            </section>
            <section
                style={{
                    opacity: isDragging && !isMobile ? "0" : "1",
                    display: "grid",
                    gridTemplateColumns: !isMobile ? "50% 50%" : "85%",
                    gridGap: "1vw",
                    padding: "2vw",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "auto",
                    transition: "all .75s ease-in-out",
                }}
            >
                {renderImages(images)}
            </section>
            <section>
                <a className="artpage-homepage" href="../">
                    Home Page
                </a>
            </section>
        </main>
    );
};

export default Art;
