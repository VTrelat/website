const Index = () => {
    const out = (
        <main>
            <section className="header">
                <a className="name">Vincent Trélat</a>
                <div className="conainer">
                    <div className="row" id="row-menu">
                        <img src="https://raw.githubusercontent.com/VTrelat/website/main/img/photocv.jpg" />
                    </div>
                    <div className="row" id="row-menu">
                        <div className="col-md" id="col-menu">
                            <a className="about" href="/cv">
                                CV
                            </a>
                        </div>
                        <div className="col-md" id="col-menu">
                            <a className="about" href="/about">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
    return out;
};

export default Index;
