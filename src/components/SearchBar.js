/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class SearchBar extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { term: '' };

  onFormSubmit = (event) => {
    // arrow function to fix the 'this' bug
    event.preventDefault();

    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // eslint-disable-next-line react/destructuring-assignment
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
