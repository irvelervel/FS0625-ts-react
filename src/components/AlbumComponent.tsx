import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import type { DeezerAlbum } from '../types'

// quando recuperate dei dati dinamicamente da un'API, ricordatevi che TS non può sapere
// come sarà fatto il JSON che otterrete indietro; è un oggetto? è un array? sono dati musicali? meteo?

// quindi come si risolve? dovete voi a mano TIPIZZARE l'interfaccia di quello che ottenete indietro!
// potete farlo a mano (scrivendo voi la interface, specialmente se il dato è semplice) oppure
// ricorrere a strumenti come https://app.quicktype.io che vi crea un'interfaccia a partire da un JSON

// includete l'interfaccia del dato restituito da qualche parte nel codice (io l'ho messa in /types)
// e in questo modo potrete TIPIZZARE lo stato che dovrà andare ad ospitare questo JSON una volta
// finita la chiamata GET

// così facendo quando poi nel JSX andrete a recuperare quei dati per creare la vostra interfaccia,
// avrete tutto tipizzato e addirittura l'autocompletamento da parte di VSCode

const pupoURL =
  'https://striveschool-api.herokuapp.com/api/deezer/album/830246231'

const AlbumComponent = function () {
  const [error, setError] = useState(false)
  const [album, setAlbum] = useState<null | DeezerAlbum>(null)

  const getAlbumData = () => {
    fetch(pupoURL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nella chiamata')
        }
      })
      .then((deezerAlbum) => {
        console.log(deezerAlbum)
        setAlbum(deezerAlbum) // metto il dato recuperato dall'API nello state "album"
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
  }

  useEffect(() => {
    // componentDidMount
    getAlbumData()
  }, [])

  return (
    <div>
      {error && <Alert variant="danger">Errore nel recupero dati</Alert>}
      {!error && album && (
        <>
          <h3>{album.title}</h3>
          <Card>
            <Card.Img variant="top" src={album.cover_big} />
            <Card.Body>
              <Card.Text>Numero di fan: {album.fans}</Card.Text>
              <Card.Text>{album.artist.name}</Card.Text>
              <Button variant="primary">Torna in Home</Button>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  )
}

export default AlbumComponent

//
