import { Component } from 'react'
import { Button } from 'react-bootstrap'

// se in un componente React intendete passare delle props, lo dovete informare!
// gli dovete creare un'INTERFACCIA per le sue props
// di solito l'interfaccia per le props di un componente, poichè sarà un'interfaccia che
// NON verrà utilizzata da nessun'altra parte, la faccio fare direttamente nel file del componente

type WeekDay = 'Lunedì' | 'Martedì' | 'Mercoledì'
type GameCharacter = 'Mario' | 'Luigi'

interface ClassComponentProps {
  title: WeekDay
  counter?: number // è opzionale, potrebbe NON arrivare in un montaggio di ClassComponent
}

interface ClassComponentState {
  name: GameCharacter // oppure genericamente mettete string
}

// se passate il cursore sopra la classe Component capirete che può accettare fino a 3 generics:
// <P> <-- Props
// <S> <-- State
// <SS> <-- SnapShot (non l'abbiamo mai visto)

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = {
    name: 'Mario',
  }

  render() {
    return (
      <div className="mt-3">
        <h2>Componente a classe</h2>
        <p>Passo una prop di nome title: il suo valore è {this.props.title}</p>
        <h3>Il nome del giocatore è: {this.state.name}</h3>
        <Button
          onClick={() => {
            this.setState({
              name: this.state.name === 'Mario' ? 'Luigi' : 'Mario',
            })
          }}
        >
          {this.props.counter || 'N/A'}
        </Button>
      </div>
    )
  }
}

export default ClassComponent
