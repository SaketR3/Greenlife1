import {Link} from "react-router-dom";

export default function Footer() {
    return (<>
        <div className="footer">
            <p className="footer-credit">Designed and programmed by Saket Reddy</p>
            <div className="footer-column">
                <p className="footer-header">Links</p>
                <Link to="/" className="footer-body underline" onClick={() => window.scroll(0, 0)}>Home</Link>
                <Link to="/create" className="footer-body underline" onClick={() => window.scroll(0, 0)}>Create Your Guide</Link>
            </div>
            <div className="footer-column">
                <p className="footer-header">Contact</p>
                <p className="footer-body">sreddyj2023@gmail.com</p>
            </div>
            <div className="footer-column">
                <p className="footer-header footer-code-header">Code</p>
                <Link to="https://github.com/SaketR3" target="_blank" className="footer-body footer-code-body underline">GitHub</Link>
            </div>
        </div>
    </>)
}