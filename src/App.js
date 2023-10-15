import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar'
import Section from './Section'
import Card from './Card'
import MainContent   from './MainContent'
function App() {

    const tableImg = "/images/table.png"
    const listImg = "/images/list.png"
    const linkImg = "/images/link.png"
    const formImg = "/images/form.png"

    const htmlTaskLinkStart = "https://belvix.github.io/MERN-Tasks/HTML%20Tasks/task"
    const cssTaskLinkStart = "https://belvix.github.io/MERN-Tasks/CSS%20Tasks/task"

    useEffect(() => {
        console.log("run");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('entrance');
                    observer.unobserve(entry.target);
                }
            });
        });

        const elements = document.querySelectorAll('.animatable-entrance');
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };

    }, []); 

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
            <Navbar scrollToId={scrollToId} />
            <Section id="section1">
                <MainContent>
                    <div className="heading">
                        <h1 id="welcome-heading" className='animatable-entrance'>Welcome to my portfolio</h1>
                        <a onClick={() => scrollToId("section2")}>
                            <span className="material-symbols-outlined down-arrow">
                                expand_more
                            </span>
                        </a>
                    </div>
                </MainContent>
            </Section>
            <Section id="section2">
                <MainContent className="html-content">
                    <div className="heading html-heading">
                        <h5 id="HTMLProj" className='animatable-entrance'>
                            HTML Projects
                        </h5>
                    </div>
                    <div className="card-display">
                        <div className='row'>
                            <Card name="Table Task" img={tableImg} prefix={htmlTaskLinkStart} taskNo={1} suffix={".html"}/>
                            <Card name="List Task" img={listImg} prefix={htmlTaskLinkStart} taskNo={2} suffix={".html"} />
                            <Card name="Links Task" img={linkImg} prefix={htmlTaskLinkStart} taskNo={3} suffix={".html"} />
                        </div>
                        <div className='row'>
                            <Card name="Small Form Task" img={formImg} prefix={htmlTaskLinkStart} taskNo={4} suffix={".html"} />
                            <Card name="Large Form Task" img={formImg} prefix={htmlTaskLinkStart} taskNo={5} suffix={".html"} />
                        </div>
                    </div>
                </MainContent>
            </Section>
            <Section id="section3">
                <MainContent className="css-content">
                    <div className="heading css-heading">
                        <h5 id="CSSProj" className='animatable-entrance'>
                            CSS Projects
                        </h5>
                    </div>
                    <div className="card-display">
                        <div className='row'>
                            <Card name="Table and Shapes Task" img={tableImg} prefix={cssTaskLinkStart} taskNo={1} suffix={".html"} />
                            <Card name="Navbar Task" img={listImg} prefix={cssTaskLinkStart} taskNo={2} suffix={".html"} />
                            <Card name="Stylized Table Task" img={linkImg} prefix={cssTaskLinkStart} taskNo={3} suffix={".html"} />
                            <Card name="Hoverable Sidenav Task" img={linkImg} prefix={cssTaskLinkStart} taskNo={4} suffix={".html"} />
                        </div>
                        <div className='row'>
                            <Card name="Stylized Page Task" img={formImg} prefix={cssTaskLinkStart} taskNo={5} suffix={".html"} />
                            <Card name="Form Page Task" img={formImg} prefix={cssTaskLinkStart} taskNo={6} suffix={".html"} />
                            <Card name="Stylized Form Page Task" img={formImg} prefix={cssTaskLinkStart} taskNo={7} suffix={".html"} />
                        </div>
                    </div>
                </MainContent>
            </Section>
        </div>
    );
}

export default App;
