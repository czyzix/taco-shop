import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-elem">
                <label>Designed by</label>
                <p>Radosław Czyżewski</p>
            </div>
            <div className="footer-elem">
                <label>Inspired by</label>
                <p><a href="https://www.tacohemingway.store/taco-hemingway">Taco Hemingway</a></p>
            </div>
            <div className="footer-elem">
                <label>Contact</label>
                <p>r.czyzewski.contact@gmail.com</p>
            </div>
        </div>
    );
}
 
export default Footer;