import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'

// Ora voglio andare a installare ed importare bootstrap+react-bootstrap. Funzioneranno in un
// ecosistema TS? Sì, però bisogna FORNIRE a TS le tipizzazioni dei componenti react-bootstrap.
// Questo vale per QUALSIASI pacchetto/libreria che aggiungete ad un progetto Node scritto in TS.

function App() {
  return (
    <Container fluid className="min-vh-100 bg-body-secondary">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <ClassComponent title="Lunedì" counter={50} />
          <ClassComponent title="Mercoledì" />
        </Col>
      </Row>
    </Container>
  )
}

export default App
