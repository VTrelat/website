const Index = () => {
    const out = (
        <main>
            <section className="header">
                <a className="name">Vincent Trélat</a>
                <div className="container">
                    <img src="https://raw.githubusercontent.com/VTrelat/website/main/img/photocv.jpg" />
                    <div className="row" id="row-menu">
                        <div className="col-md" id="col-menu">
                            <a className="homepage-link" href="/cv">
                                .resume()
                            </a>
                        </div>
                        <div className="col-md" id="col-menu">
                            <a className="homepage-link" href="/about">
                                .about()
                            </a>
                        </div>
                        <div className="col-md" id="col-menu">
                            <a className="homepage-link" href="/contact">
                                .contact()
                            </a>
                        </div>
                        <div className="col-md" id="col-menu">
                            <a className="homepage-link" href="/art">
                                .art()
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
