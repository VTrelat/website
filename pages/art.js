import React, { useState } from "react";

const Art = () => {
    const [pos, setPos] = useState({ x: 0, y: 0, scale: 8 });
    const [isDragging, setIsDragging] = useState(true);

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

    return (
        <main
            className="artpage"
            style={{
                height: isDragging ? "100vh" : "",
                overflow: isDragging ? "hidden" : "auto",
                color: "white",
            }}
        >
            <img
                src="https://raw.githubusercontent.com/VTrelat/website/main/img/art/00.jpg"
                onWheelCapture={onScroll}
                style={{
                    height: "auto",
                    width: "100%",
                    transformOrigin: "49% 58%",
                    transform: `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`,
                    mask: `linear-gradient(rgba(255,255,255,1) ${
                        60 * (1 - (pos.scale - 1) / 7)
                    }%, rgba(255,255,255,${(pos.scale - 1) / 7}))`,
                }}
            />
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%",
                    fontSize: "4em",
                }}
            >
                Art & Photography
            </section>
        </main>
    );
};

export default Art;
