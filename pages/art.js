import React from "react";

const getURLs = () => {
    const baseURL =
        "https://raw.githubusercontent.com/VTrelat/website/main/img/art/";
    let out = [];
    for (let i = 0; i <= 23; i++) {
        const url = `${baseURL}0${i}.jpg`;
        out.push(url);
    }

    return out;
};
const images = getURLs();

console.log(images);

const Art = () => {
    const currentFrame = (index) => null;

    return (
        <main id="artpage" style={{ color: "white" }}>
            {/* <canvas class="photo-scrolling"></canvas> */}
            <section className="header">Empty for now</section>
            <img src="https://raw.githubusercontent.com/VTrelat/website/main/img/art/010.jpg" />
        </main>
    );
};

export default Art;
