import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const title = "Art & Photography";
const getURL = () => {
    let out = [];
    for (let i = 1; i < 23; i++) {
        out.push(
            `https://raw.githubusercontent.com/VTrelat/website/main/img/art/0${i}.jpg`
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
    const [pos, setPos] = useState({ x: 0, y: 0, scale: 8 });
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
            scale: newScale < 1 ? 1 : newScale > 8 ? 8 : newScale,
            x: pos.x,
            y: pos.y,
        });
    };

    return !isMobile ? (
        <main
            className="artpage"
            style={{
                height: isDragging ? "100vh" : "auto",
                overflow: isDragging ? "hidden" : "auto",
                color: "white",
            }}
        >
            <img
                className="artpage-header-image"
                src="https://raw.githubusercontent.com/VTrelat/website/main/img/art/00.jpg"
                onWheelCapture={onScroll}
                style={{
                    height: "auto",
                    width: "100%",
                    transformOrigin: "49% 58%",
                    transform: `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`,
                    mask: `linear-gradient(rgba(255,255,255,1) ${
                        55 * (1 - (pos.scale - 1) / 7)
                    }%, rgba(255,255,255,${(pos.scale - 1) / 7}))`,
                }}
            />
            <section
                className="artpage-title"
                style={{
                    opacity: isDragging ? "0" : "1",
                    marginTop: "5vh",
                    marginBottom: "10vh",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "6vw",
                    transition: "all .75s ease-in-out",
                }}
            >
                {title}
            </section>
            <section
                style={{
                    opacity: isDragging ? "0" : "1",
                    display: "grid",
                    gridTemplateColumns: "50% 50%",
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
                <a
                    href="../"
                    style={{
                        textDecoration: "none",
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "2vw",
                        color: "white",
                        paddingBottom: "2vh",
                    }}
                >
                    Home Page
                </a>
            </section>
        </main>
    ) : (
        <main
            className="artpage"
            style={{
                height: "auto",
                overflow: "auto",
                color: "white",
            }}
        >
            <img
                className="artpage-header-image"
                src="https://raw.githubusercontent.com/VTrelat/website/main/img/art/00.jpg"
                style={{
                    width: "100%",
                    height: "auto",
                    transform: `scale(1) translate(0, 0)`,
                    mask: `linear-gradient(rgba(255,255,255,1) ${55}%, rgba(255,255,255,0))`,
                }}
            />
            <section
                className="artpage-title"
                style={{
                    opacity: "1",
                    marginTop: "5vh",
                    marginBottom: "10vh",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "6vw",
                    transition: "all .75s ease-in-out",
                }}
            >
                {title}
            </section>
            <section
                style={{
                    opacity: "1",
                    display: "grid",
                    gridTemplateColumns: "50% 50%",
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
                <a
                    href="../"
                    style={{
                        textDecoration: "none",
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "2vw",
                        color: "white",
                        paddingBottom: "2vh",
                    }}
                >
                    Home Page
                </a>
            </section>
        </main>
    );
};

export default Art;
