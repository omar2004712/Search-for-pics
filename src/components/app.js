import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './imageList';

class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { images: [] };

  // eslint-disable-next-line class-methods-use-this
  onSearchSubmit = async (term) => {
    // request images from the api by the term
    const {
      data: { results },
    } = await unsplash.get('/search/photos', { params: { query: term } });

    this.setState({ images: results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
