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
        
    };
  }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
  handleClick = (e)  => {
    this.setState({
      isPlayerOneTurn: !this.state.isPlayerOneTurn,
    })
    console.log(` The ID is: ${e.target.id} and the status of player turn is: ${this.state.isPlayerOneTurn}`)
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
            <button className="square" id="0">
              Space
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