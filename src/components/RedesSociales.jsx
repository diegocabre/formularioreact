export const RedesSociales = ({ facebook, github, instagram }) => {
    return (
        <>
            <div className="redes">
                <div className="card">
                    <i className="fa-brands fa-facebook">{facebook}</i>
                </div>
                <div className="card">
                    <i className="fa-brands fa-github">{github}</i>
                </div>
                <div className="card">
                    <i className="fa-brands fa-instagram">{instagram}</i>
                </div>
            </div>
        </>
    );
}