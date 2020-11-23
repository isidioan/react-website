import React from 'react'
import {Button, Col, Container, Row} from "reactstrap";
import {useHistory} from "react-router-dom";


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

    const history = useHistory();

    const routeChange = () =>{
        let path = `/contact`;
        history.push(path);
    }

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
                        <h1 style={{fontStyle: "italic"}}>Κτηματο-μηχανική</h1>
                        <h3>Υπηρεσίες Μηχανικού</h3>
                        <br/>
                        <Button
                            onClick={routeChange}
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
                    <div className="title title-blue">
                        <h2>Υπηρεσίες</h2>
                    </div>
                    <Row>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="/constService">
                                    <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Μελέτες - Κατασκευές</h4>
                                <p>Το γραφείο αναλαμβάνει την μελέτη και κατασκευή του συνόλου ενός τεχνικού έργου.</p>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="/repService">
                                    <i className="fa fa-paint-brush fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Ανακαινίσεις - Επισκευές</h4>
                                <p>Ανάληψη της πλήρη ανακαίνιση/ανακατασκευή της ιδιοκτησίας σας με γνώμονα την απόλυτη
                                    κάλυψη των δικών σας αναγκών.</p>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="/engService" style={{paddingRight: "20%"}}>
                                    <i className="fa fa-cogs fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Υπηρεσίες Τεχνικού Γραφείου</h4>
                                <p>Η ύπαρξη διαφορετικών ειδικοτήτων μηχανικών στο γραφείο μας, σας εξασφαλίζει την
                                    πολύπλευρη αντιμετώπιση των αναγκών σας.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-blue">
                <Container>
                    <div className="title title-white">
                        <h2>Επικοινωνία</h2>
                    </div>
                    <Row>
                        <Col md="5" sm="6">
                            <div className="address-info">
                                <i className="fa fa-map-marker"></i>
                                <span className="address-info-label address-info-white">Διεύθυνση: </span>
                                <span className="address-info-white">Μιχοπούλου 8, Αλμυρός, 37100</span>
                            </div>
                            <div className="address-info">
                                <i className="fa fa-phone"></i>
                                <span className="address-info-label address-info-white">Τηλέφωνο: </span>
                                <span className="address-info-white">(+30) 2422100186</span>
                            </div>
                            <div className="address-info">
                                <i className="fa fa-envelope"></i>
                                <span className="address-info-label address-info-white">Email: </span>
                                <span>
                                    <a className="address-info-white"
                                       href="mailto:ktm.almyrou@gmail.com">ktm.almyrou@gmail.com</a>
                                </span>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height="300px" id="gmap_canvas" title="smallMap"
                                            src="https://maps.google.com/maps?q=%CE%9C%CE%B9%CF%87%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85%208%2C%20%CE%91%CE%BB%CE%BC%CF%85%CF%81%CE%BF%CF%82&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomePage;