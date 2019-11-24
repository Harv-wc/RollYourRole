import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Option from './components/Option'

class App extends React.Component {

  _data = {
    'Horde' : {
      'Orc' : ['Warrior', 'Shaman', 'Rogue', 'Hunter', 'Warlock'],
      'Tauren' : ['Druid', 'Hunter', 'Shaman', 'Warrior'],
      'Troll' : ['Hunter', 'Mage', 'Priest', 'Rogue', 'Shaman', 'Warrior'],
      'Undead' : ['Mage', 'Priest', 'Rogue', 'Warlock', 'Warrior']
    },
    'Alliance' : {
      'Dwarf' : ['Hunter', 'Paladin', 'Priest', 'Rogue', 'Warrior'],
      'Gnome' : ['Mage', 'Rogue', 'Warlock', 'Warrior'],
      'Human' : ['Mage', 'Paladin', 'Priest', 'Rogue', 'Warlock', 'Warrior'],
      'Night Elf' : ['Druid', 'Hunter', 'Priest', 'Rogue', 'Warrior']
    },
    'Bitch' : {
      'Dwarf' : ['Hunter', 'Paladin', 'Priest', 'Rogue', 'Warrior'],
      'Gnome' : ['Mage', 'Rogue', 'Warlock', 'Warrior'],
      'Human' : ['Mage', 'Paladin', 'Priest', 'Rogue', 'Warlock', 'Warrior'],
      'Night Elf' : ['Druid', 'Hunter', 'Priest', 'Rogue', 'Warrior']
    }
  }

  constructor(props) {
    super(props);
    console.log(`App Constructor`);

    this.state = {
        faction : null,
        race : null,
        class : null
    };
  }

  displayRaces() {
    return (
      <Container className="App">
      <Row>
        <Col>
          <Option value='Horde'/>
        </Col>
        <Col>
          <Option value='Aliance'/>
        </Col>
      </Row>
      </Container>
    )
  }

  displayChoices(choices, cb) {
    let rows = [];
    let cols = []
    choices.forEach( (choice, i) => {
     cols.push( <Col key={`option_${i}`}><Option value={`${choice}`} onClick={() => {cb(choice)}}/></Col>);
     if ((i+1) % 2 === 0) {
       rows.push(cols);
       cols = []
     }
   })

    return (
      <Container className="App">
        {
          rows.map((cols, rowId) => {
            return (
              <Row key={`row_${rowId}`}>
                {cols}
              </Row>
            )
          })
        }
      </Container>
    )
  }

  render() {
    
    if (this.state.faction == null) {
      let factions = Object.keys(this._data);
      return this.displayChoices(factions, (choice) => {
        this.setState({ faction : choice })
      });
    } else if (this.state.race == null) {
      let races = Object.keys(this._data[this.state.faction]);
      return this.displayChoices(races, (choice) => {
        this.setState({ race : choice })
      });
    } else if (this.state.class == null) {
      let classes = this._data[this.state.faction][this.state.race];
      return this.displayChoices(classes, (choice) => {
        this.setState({ class : choice })
      });
    } else {
      return (
        <Container className="App">
          <Row> <Col>
          <h1>{`${this.state.faction} ${this.state.race} ${this.state.class}`}</h1>
          </Col></Row>
        </Container>
      )
    }
  }
}

export default App;
