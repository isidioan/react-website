import React from "react"
import {Container, Row} from "reactstrap";


function ConstructionService() {

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/construction-header.jpg") + ")",
            }}
                 className="page-header page-header-small"
                 data-parallax={true}>
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h3>Μελέτες-Κατασκευές</h3>
                        <br/>
                    </div>
                </Container>
            </div>
            <div id="body" className="section">
                <Container>
                    <Row>
                        <p>Η Κτηματομηχανική παρέχει ολοκληρωμένες υπηρεσίες εκπόνησης όλου του φάσματος των
                            μελετών και μπορεί να αναλάβει τον σχεδιασμό, την αδειοδότηση και την υλοποίηση έργων κάθε
                            κατηγορίας και μεγέθους.</p>
                    </Row>
                    <Row>
                        <p>Συγκεκριμένα παρέχουμε:</p>
                    </Row>
                    <Row>
                        <br/>
                        <ul>
                            <li>Αρχιτεκτονική μελέτη κτιριακών έργων</li>
                            <li>Στατικές μελέτες κτιριακών έργων</li>
                            <li>Μελέτη ειδικών θεμελιώσεων</li>
                            <li>Έλεγχος στατικής επάρκειας</li>
                            <li>Έκδοση οικοδομικών αδειών</li>
                            <li>Ένισχύσεις κτηρίων</li>
                        </ul>
                    </Row>

                </Container>

            </div>
        </>
    );
}

export default ConstructionService;