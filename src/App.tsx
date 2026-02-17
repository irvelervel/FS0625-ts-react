import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FuncComponent from './components/FuncComponent'
import ClassComponent from './components/ClassComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicNavbar from './components/BasicNavbar'
import Main from './components/Main'

// Ora voglio andare a installare ed importare bootstrap+react-bootstrap. Funzioneranno in un
// ecosistema TS? Sì, però bisogna FORNIRE a TS le tipizzazioni dei componenti react-bootstrap.
// Questo vale per QUALSIASI pacchetto/libreria che aggiungete ad un progetto Node scritto in TS.

function App() {
  return (
    <BrowserRouter>
      <BasicNavbar />
      <Container fluid className="min-vh-100 bg-body-secondary">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/class"
                element={
                  <>
                    <ClassComponent title="Lunedì" counter={50} />
                    <ClassComponent title="Mercoledì" />
                  </>
                }
              />
              <Route
                path="/func"
                element={<FuncComponent price={100} loading={true} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
