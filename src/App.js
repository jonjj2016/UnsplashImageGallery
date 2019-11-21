import React from 'react';
import unsplash from './API/unsplash';

import SearchBar from './components/SearchBar.component';
import ImageList from './components/imageList.component';
//  import faker from 'faker';
class App extends React.Component {
  state = {
    inputVal: '',
    subVal: '',
    images: []
  };

  onInputChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  onFormSubmit = async e => {
    e.preventDefault();

    let response = await unsplash.get('/search/photos', {
      params: {
        query: this.state.inputVal,
        per_page: 30
      }
    });
    this.setState({ inputVal: '' });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar
          onInputChange={this.onInputChange}
          inputVal={this.state.inputVal}
          onFormSubmit={this.onFormSubmit}
          placeholder='Searc for Cars'
          label='Image Search'
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
