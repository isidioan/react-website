import React from "react"
import {Container, Row} from "reactstrap";


function EngineerService() {

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/meletes1.jpg") + ")",
            }}
                 className="page-header page-header-small"
                 data-parallax={true}>
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h3>Υπηρεσίες Τεχνικού Γραφείου</h3>
                        <br/>
                    </div>
                </Container>
            </div>
            <div id="body" className="section">
                <Container>
                    <Row>
                        <p>Τα στελέχη της εταιρείας είναι μηχανικόι διαφόρων ειδικοτήτων, προσφορέντας πληρώθα υπηρεσιών
                            που μπορούν να καλύψουν όλες τις ανάγκες σας, Η κτηματομηχανική παρέχει υπηρεσίες μηχανικού σε ιδιώτες και επιχειρήσεις σε θέματα που αφορούν:</p>
                    </Row>
                    <Row>
                        <br/>
                        <ul>
                            <li>Νομιμοποίηση - τακτοποίηση αυθαιρέτων</li>
                            <li>Οικοδομικές άδειες</li>
                            <li>Άδειες Λειτουργίας</li>
                            <li>Έλεγχος νομιμότητας κτιρίων - κατασκευών</li>
                            <li>Τοπογραφικά διαγράμματα & εντοπισμό ακινήτων</li>
                            <li>Πιστοποιητικά ενεργειακής απόδοσης ακίνητων (Π.Ε.Α.)</li>
                            <li>Αδειοδότηση Φ/Β συστημάτων</li>
                            <li>Ηλεκτρομηχανολογικές Μελέτες & Σχέδια ΔΕΗ</li>
                            <li>Σύνταξη & υποβολή φακέλου για το Εθνικό Κτηματολόγιο</li>
                        </ul>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default EngineerService;