import { ListGroup } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Main = function () {
  // l'oggetto location, la funzione navigate e anche i params non necessitano di tipizzazione
  // const location = useLocation()
  // const navigate = useNavigate()
  // se mettete un generic a useParams potete limitare le chiavi all'interno dell'oggetto
  const params = useParams<{ movieID: string; bookID: string }>()

  const id1 = params.bookID
  const id2 = params.movieID

  return (
    <div>
      <h1>React + TypeScript</h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/class">Componenti a classe</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/func">Componenti a funzione</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Main
