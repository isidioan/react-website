import React from 'react'
import {Button, Col, Container, Row} from "reactstrap";


function HomePage() {

    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/meletes3.jpg") + ")",
            }}
                 className="page-header"
                 data-parallax={true}
                 ref={pageHeader}>
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h1 style={{fontStyle: "italic"}}>Κτηματο-μηχανική Ο.Ε</h1>
                        <h3>Υπηρεσίες Μηχανικού</h3>
                        <br/>
                        <Button
                            href="#"
                            className="btn-round mr-1"
                            color="neutral"
                            target="_blank"
                            outline
                        >
                            Επικοινωνήστε μαζι μας
                        </Button>
                    </div>
                </Container>
            </div>
            <div id="body" className="section">
                <Container>
                    <div className="title">
                        <h2>Υπηρεσίες</h2>
                    </div>
                    <Row>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="#">
                                    <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Μελέτες - Κατασκευές</h4>
                                <p>O kitsos kai o mitsos</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomePage;