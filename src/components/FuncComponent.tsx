import { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'

interface FuncComponentProps {
  price: number
  loading: boolean
}

type GameCharacter = 'Mario' | 'Luigi'

// per tipizzare le props in un componente a funzione si va semplicemente a dare una forma
// al parametro della funzione, quello che abbiamo sempre chiamato "props"

const FuncComponent = function (props: FuncComponentProps) {
  const [name, setName] = useState<GameCharacter>('Mario')

  // quando la Type Inference di TS non vi soddisfa, dovete sovrascrivere dando a mano
  // il generic di useState
  const [data, setData] = useState<string | null>('')

  // gli useEffect non necessitano tipicamente di tipizzazioni aggiuntive
  useEffect(() => {}, [])

  return (
    <div className="mt-3">
      <h2>Componente a funzione</h2>
      <p>Il prezzo è: {props.price}</p>
      <p>Il nome del giocatore è {name}</p>
      <button
        onClick={() => {
          setData(null)
        }}
      ></button>
      <Button
        onClick={() => {
          //   setName(name === 'Mario' ? 'Luigi' : 'Mario')
          //   overload alternativo:
          //   setName(name => name === 'Mario' ? 'Luigi' : 'Mario')
        }}
        variant="success"
      >
        CAMBIA NOME
      </Button>
      {props.loading && (
        <div>
          <Spinner animation="border" />
        </div>
      )}
    </div>
  )
}

// VERSIONE CON PROPS DESTRUTTURATE
// const FuncComponent = function ({ price, loading }: FuncComponentProps) {
//   return (
//     <div className="mt-3">
//       <h2>Componente a funzione</h2>
//       <p>Il prezzo è: {price}</p>
//       {loading && (
//         <div>
//           <Spinner animation="border" />
//         </div>
//       )}
//     </div>
//   )
// }

export default FuncComponent
