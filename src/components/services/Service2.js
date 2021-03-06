import React from "react"
import {Container, Row} from "reactstrap";


function RepairService() {

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/anakainiseis.jpg") + ")",
            }}
                 className="page-header page-header-small"
                 data-parallax={true}>
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h3>Ανακαινίσεις - Επισκευές</h3>
                        <br/>
                    </div>
                </Container>
            </div>
            <div id="body" className="section">
                <Container>
                    <Row>
                        <h3>Ανακαίνιση</h3>
                    </Row>
                    <Row>
                        <p style={{paddingTop: "2%", paddingBottom: "2%"}}>Η εταιρεία μας, με πολυετή εμπειρία στον
                            σχεδιασμό και την κατασκευή κτιρίων, αναλαμβάνει με τον βέλτιστο τρόπο ανακαινίσεις
                            κατοικιών και επαγγελματικών χώρων. Ειδικότερα, το έμπειρο προσωπικό μας αναλαμβάνει όλα τα
                            στάδια μιας ανακαίνισης, από τον αρχικό σχεδιασμό έως την υλοποίηση ιδιωτικών έργων
                            εξαιρετικής αισθητικής και λειτουργικότητας. Η ομάδα της Κτηματομηχανικής, δραστηριοποιείται
                            κυρίως με την ανακατασκευή και τη διαμόρφωση εσωτερικών χώρων, την αποπεράτωση έργων σε
                            οποιοδήποτε στάδιο κατασκευής, ενώ ιδιαίτερα σημαντική είναι η παρουσία της στον χώρο του
                            βιοκλιματικού σχεδιασμού. Μελετώντας όλα τα δεδομένα και δίνοντας ιδιαίτερη έμφαση σε μια
                            ισορροπημένη σχέση ανθρώπου – χώρου, η ομάδα, είναι έτοιμη να αντιμετωπίσει με
                            επαγγελματισμό, σοβαρότητα και άριστα αποτελέσματα, τις ανάγκες των εκάστοτε εργασιών
                            ανακαίνισης.</p>
                    </Row>
                    <Row>
                        <p>Αναλαμβάνουμε:</p>
                    </Row>
                    <Row>
                        <br/>
                        <ul>
                            <li>Κατοικίες και Οικιστικά Συγκροτήματα</li>
                            <li>Κτίρια Γραφείων</li>
                            <li>Εμπορικά Κέντρα και Καταστήματα</li>
                            <li>Ανακαινίσεις - αναπαλαιώσεις παραδοσιακών Κτιρίων</li>
                        </ul>
                    </Row>
                    <Row>
                        <h3>Επισκευή - Ενίσχυση κτιρίων</h3>
                    </Row>
                    <Row>
                        <p style={{paddingTop: "2%"}}>Η Κτηματομηχανική ειδικεύεται και στις
                            ενισχύσεις και αποκαταστάσεις βλαβών σε κτίρια αναλαμβάνοντας:</p>
                    </Row>
                    <Row>
                        <br/>
                        <ul>
                            <li>τον επιτόπου έλεγχο και αποτύπωση σε σχέδια της υφιστάμενης κατάστασης (αποτύπωση
                                διαστάσεων, οπλισμού και αντοχής δομικών στοιχείων)
                            </li>
                            <li>έλεγχο της στατικής επάρκειας του κτιρίου</li>
                            <li>εκπόνηση μελέτης αποκατάστασης του κτιρίου, ανάλογα με τη χρήση του (νέος ή παλαιότερος
                                κανονισμός), βάση του οποίου αποφασίζεται ποια δομικά στοιχεία του κτιρίου πρέπει να
                                ενισχυθούν
                            </li>
                        </ul>
                    </Row>

                </Container>

            </div>
        </>
    );
}

export default RepairService;