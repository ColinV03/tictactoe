import React, { Component } from 'react';

class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneId: '',
      playerTwoId: '',
      isPlayerOneTurn: false,
      playerOneSign: "X",
      playerTwoSign: "O",
      currentSign: "X",
      board: {
        ID0: "",
        ID1: null,
        ID2: null,
        ID3: null,
        ID4: null, 
        ID5: null, 
        ID6: null, 
        ID7: null, 
        ID8: null,       
      }
      
    };
  }
    
  handleChange = (e) => {
      e.preventDefault();
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  setSquareValue = (e) => {
    this.setState({
      board: {
        [e.target.id]: this.state.currentSign.value
      }
    })
    
    console.log(`Square Value Assigned! ${e.target.id} was clicked. ${this.state.currentSign} should be applied. IS it?? ${this.state.board[e.target.id]}`)
  }
  //alternate player sign
  setCurrentSign = () => {
    if (!this.state.isPlayerOneTurn) {
      this.setState({
        currentSign: this.state.playerTwoSign
      })
    } else {
      this.setState({
        currentSign: this.state.playerOneSign
      })
    }  
  }
    
  handleClick = (e) => {
    this.setCurrentSign();
    this.setSquareValue(e);
    // this.setState({
    //   isPlayerOneTurn: !this.state.isPlayerOneTurn,
    //   board: {
    //     [e.target]: this.state.currentSign
    //   }
    // })
    console.log(` The ID is: ${e.target.id} 
                and the status of player turn is:
                ${this.state.isPlayerOneTurn} 
                This square has value: ${this.state.board[e.target.id].value}
                and the current sign is: ${this.state.currentSign}`)
  }
  render() {

    // let playerNames =() =>  this.state.playerOneId === '' ? '' : <div>{this.state.playerOneId} Versus {this.state.playerTwoId}</div>
      return (
        <div>
          <form>
            <input
              name="playerOneId"
              placeholder="Player One Name?"
              value={this.state.playerOneId}
              onChange={this.handleChange}
            />
            <input
              name="playerTwoId"
              placeholder="Player Two Name?"
              value={this.state.playerTwoId}
              onChange={this.handleChange}
            />
          </form>


          <br></br>
          

          <div className="grid" onClick={this.handleClick}>
            <button className="square" id="ID0" value={this.state.board.ID0}>
              {this.state.board.ID0}
            </button>
            <button className="square" id="1">
              Space
            </button>
            <button className="square" id="2">
              Space
            </button>

            <button className="square" id="3">
              Space
            </button>
            <button className="square" id="4">
              Space
            </button>
            <button className="square" id="5">
              Space
            </button>

            <button className="square" id="6">
              Space
            </button>
            <button className="square" id="7">
              Space
            </button>
            <button className="square" id="8">
              space
            </button>
          </div>
        </div>
      );
  }
}
 
export default Gameboard;