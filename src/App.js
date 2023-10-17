import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Section from './Section'
import Card from './Card'
import MainContent from './MainContent'
function App() {

    const tableImg = "/images/table.png"
    const listImg = "/images/list.png"
    const linkImg = "/images/link.png"
    const formImg = "/images/form.png"

    const htmlTaskLinkStart = "https://belvix.github.io/MERN-Tasks/HTML%20Tasks/task"
    const cssTaskLinkStart = "https://belvix.github.io/MERN-Tasks/CSS%20Tasks/task"

    const [overlay, setOverlay] = useState("");

    useEffect(() => {
        setOverlay(document.getElementById("overlay"))

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

        elements.forEach(element => {
            element.addEventListener("transitionend", (event) => {
                // Find the parent .heading of the .animatable-entrance
                let headingElement = event.target.closest('.animated-heading');
                if (headingElement != null) {
                    console.log(event.target);
                    // From the heading element, find the next .card-display sibling
                    let cardDisplay = headingElement.nextElementSibling;

                    // If the next sibling is not the .card-display, you might want to find it using other methods,
                    // but for the structure you've provided, this should work.

                    // Access each card inside the card-display
                    let cards = cardDisplay.querySelectorAll('.card');  // Assuming each Card component has a .card className

                    cards.forEach(card => {
                        // You can now work with each card
                        card.classList.add("entrance");
                    });
                }
            });
        });

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };


    }, []);

    function scrollToId(id) {
        let projectStart = document.getElementById(id);
        projectStart.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    function openIFrame(prefix, taskNo, suffix) {
        let url = prefix + taskNo + suffix;
        const iframeElement = overlay.children[1];

        iframeElement.onload = function () {
            overlay.classList.remove("hidden");
            iframeElement.onload = null;
        };

        iframeElement.src = url;
    }

    function closeIFrame() {
        overlay.classList.add("hidden");
    }

    return (
        <div className="App">
            <div id="overlay" className="hidden">
                <button id="closeOverlay" onClick={closeIFrame}> <span className="material-symbols-outlined">
                    close
                </span></button>
                <iframe src=""></iframe>
            </div>
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
                    <div className="heading animated-heading html-heading">
                        <h5 id="HTMLProj" className='animatable-entrance'>
                            HTML Projects
                        </h5>
                    </div>
                    <div className="card-display">
                        <div className='row'>
                            <Card name="Table Task" img={tableImg} openIFrame={() => openIFrame(htmlTaskLinkStart, 1, ".html")} />
                            <Card name="List Task" img={listImg} openIFrame={() => openIFrame(htmlTaskLinkStart, 2, ".html")} />
                            <Card name="Links Task" img={linkImg} openIFrame={() => openIFrame(htmlTaskLinkStart, 3, ".html")} />
                        </div>
                        <div className='row'>
                            <Card name="Small Form Task" img={formImg} openIFrame={() => openIFrame(htmlTaskLinkStart, 4, ".html")} />
                            <Card name="Large Form Task" img={formImg} openIFrame={() => openIFrame(htmlTaskLinkStart, 5, ".html")} />
                        </div>
                    </div>
                </MainContent>
            </Section>
            <Section id="section3">
                <MainContent className="css-content">
                    <div className="heading animated-heading css-heading">
                        <h5 id="CSSProj" className='animatable-entrance'>
                            CSS Projects
                        </h5>
                    </div>
                    <div className="card-display">
                        <div className='row'>
                            <Card name="Table and Shapes Task" img={tableImg} openIFrame={() => openIFrame(cssTaskLinkStart, 1, ".html")} />
                            <Card name="Navbar Task" img={listImg} openIFrame={() => openIFrame(cssTaskLinkStart, 2, ".html")} />
                            <Card name="Stylized Table Task" img={linkImg} openIFrame={() => openIFrame(cssTaskLinkStart, 3, ".html")} />
                            <Card name="Hoverable Sidenav Task" img={linkImg} openIFrame={() => openIFrame(cssTaskLinkStart, 4, ".html")} />
                        </div>
                        <div className='row'>
                            <Card name="Stylized Page Task" img={formImg} openIFrame={() => openIFrame(cssTaskLinkStart, 5, ".html")} />
                            <Card name="Form Page Task" img={formImg} openIFrame={() => openIFrame(cssTaskLinkStart, 6, ".html")} />
                            <Card name="Stylized Form Page Task" img={formImg} openIFrame={() => openIFrame(cssTaskLinkStart, 7, ".html")} />
                        </div>
                    </div>
                </MainContent>
            </Section>
        </div>
    );
}

export default App;
