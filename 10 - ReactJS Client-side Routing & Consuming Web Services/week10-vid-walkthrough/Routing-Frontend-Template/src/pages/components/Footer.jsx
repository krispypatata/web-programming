const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
            <div className="footer">
                <hr />
                <a href="https://ics.uplb.edu.ph/degree-programs/bs-computer-science/" target="_blank">
                    <span>CMSC 100: Web Programming</span><br />
                    <span>&copy; {currentYear} Institute of Computer Science</span><br />
                    <span>University of the Philippines Los Baños</span>
                </a>
            </div>
        </>
    )
}

export default Footer;