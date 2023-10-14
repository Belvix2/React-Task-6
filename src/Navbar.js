function Navbar({scrollToId}){
    return (
        <div className="navbar">
            <a href="#" id="banner">Portfolio Website</a>
            <a onClick={() => scrollToId("section1")}>Home</a>
            <a href="https://github.com/Belvix" target="_blank">Github</a>
        </div>
    )
}

export default Navbar