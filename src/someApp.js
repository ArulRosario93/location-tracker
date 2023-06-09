import React, { Component } from "react";
import "./App.css";
import GuestList from './GuestList.js';
class App extends Component {
  state = {
    guests: [
      {
        name: "Jeresh The Instructor",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Nadigar Prince",
        isConfirmed: true,
        isEditing: true
      },
      {
        name: "Cool kishore",
        isConfirmed: true,
        isEditing: false
      }
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = index => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }


  toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  // getTotalInvited = () => this.state.guests.length;
  //getAttendedGuests = () =>
  //getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>My Attendance App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
