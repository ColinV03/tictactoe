import React, { Component } from 'react';

class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playerId: '',
        isPlayerOneTurn: true,
        
    };
  }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
  handleClick(e) {
    console.log(e.target.id);
  }
  render() {
      return (
        <div>
          <form>
            <input name="playerId" placeholder="Your name?" value={this.state.playerId} onChange={this.handleChange}/>
              </form>
              <br></br>
              <h1> {this.state.playerId}</h1>
          <div className="grid" onClick={this.handleClick}>
            <button className="square" id="topLeft">
              Space
            </button>
            <button className="square" id="topCenter">
              Space
            </button>
            <button className="square" id="topRight">
              Space
            </button>

            <button className="square" id="midLeft">
              Space
            </button>
            <button className="square" id="midCenter">
              Space
            </button>
            <button className="square" id="midRight">
              Space
            </button>

            <button className="square" id="botLeft">
              Space
            </button>
            <button className="square" id="botCenter">
              Space
            </button>
            <button className="square" id="botRight">
              space
            </button>
          </div>
        </div>
      );
  }
}
 
export default Gameboard;