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
        ID1: "",
        ID2: "",
        ID3: "",
        ID4: "", 
        ID5: "", 
        ID6: "", 
        ID7: "", 
        ID8: "",       
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
    e.preventDefault();
    this.setState({
      board: {
      [e.target.id]: this.state.currentSign
      }
    })
    
    console.log(`Square Value Assigned! ${e.target.id} was clicked. ${this.state.currentSign} should be applied. IS it?? ${this.state.board[e.target.id]}`)
  }
  //alternate player sign
  setCurrentSign = () => {
    if (!this.state.isPlayerOneTurn) {
      this.setState({
        currentSign: this.state.playerTwoSign,
        isPlayerOneTurn: !this.state.isPlayerOneTurn
      })
    } else {
      this.setState({
        currentSign: this.state.playerOneSign,
        isPlayerOneTurn: !this.state.isPlayerOneTurn,
      });
    }  
  }
    
  handleClick = (e) => {
    e.preventDefault();
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
                This square has value: ${this.state.board[e.target.id]}
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
              type="text"
            />
            <input
              name="playerTwoId"
              placeholder="Player Two Name?"
              value={this.state.playerTwoId}
              onChange={this.handleChange}
              type="text"
            />
          </form>

          <br></br>

          <div className="grid">
            <div
              className="square"
              id="ID0"
              value={this.state.board.ID0}
              onClick={this.handleClick}
            >
              {this.state.board.ID0}
            </div>
            <div
              className="square"
              id="ID1"
              value={this.state.board.ID1}
              onClick={this.handleClick}
            >
              {this.state.board.ID1}
            </div>
            <div
              className="square"
              id="ID2"
              value={this.state.board.ID2}
              onClick={this.handleClick}
            >
              {this.state.board.ID2}
            </div>

            <div
              className="square"
              id="ID3"
              value={this.state.board.ID3}
              onClick={this.handleClick}
            >
              {this.state.board.ID3}
            </div>
            <div
              className="square"
              id="ID4"
              value={this.state.board.ID4}
              onClick={this.handleClick}
            >
              {this.state.board.ID4}
            </div>
            <div
              className="square"
              id="ID5"
              value={this.state.board.ID5}
              onClick={this.handleClick}
            >
              {this.state.board.ID5}
            </div>

            <div
              className="square"
              id="ID6"
              value={this.state.board.ID6}
              onClick={this.handleClick}
            >
              {this.state.board.ID6}
            </div>
            <div
              className="square"
              id="ID7"
              value={this.state.board.ID7}
              onClick={this.handleClick}
            >
              {this.state.board.ID7}
            </div>
            <div
              className="square"
              id="ID8"
              value={this.state.board.ID8}
              onClick={this.handleClick}
            >
              {this.state.board.ID8}
            </div>
          </div>
        </div>
      );
  }
}
 
export default Gameboard;