const CVitem = (props) => {
    const out = (
        <div className="cv-card">
            <div className="cv-card-body">
                <img src={props.img} />
                <h2 className="cv-card-title">{props.title}</h2>
                <p className="cv-card-description">{props.content}</p>
            </div>
        </div>
    );
    return out;
};

export default CVitem;
