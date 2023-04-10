
import React, { Component } from "react";
import "./App.css";
import GuestList from './GuestList';
import Counter from './Counter'
class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Nick",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Abel",
        isConfirmed: false,
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

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    })
  }

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered })
  }

  handleNameInput = (e) => {
    this.setState({
      pendingGuest: e.target.value
    })
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests // populates the new guests array with the previous guests array
      ],
      pendingGuest: ''
    })
  }

  getTotalInvited = () => this.state.guests.length;


  getAttendedGuests = () =>
    this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0)
  //getUnconfirmedGuests = () =>

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendedGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <header>
          <h1>Location Tracker</h1>
          <p> Attendance App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
            <input type="text"
              onChange={this.handleNameInput}
              value={this.state.pendingGuest} placeholder="Add Student" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Students</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't confirmed
            </label>
          </div>
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed} />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;