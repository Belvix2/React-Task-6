import './App.css';
import Navbar from './Navbar'

function App() {
    function scrollToId(id){
        let projectStart = document.getElementById(id);
        projectStart.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    return (
        <div className="App">
            <Navbar scrollToId={scrollToId}/>
            <div className="section" id="section1">
                <div className='mainContent'>
                    <div className="heading">
                        <h1>
                            Welcome to my portfolio
                        </h1>
                        <a onClick={() => scrollToId("section2")}>
                            <span className="material-symbols-outlined down-arrow">
                                expand_more
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section" id='section2'>

            </div>
        </div>
    );
}

export default App;
