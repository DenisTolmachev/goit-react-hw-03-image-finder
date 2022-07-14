import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import * as API from 'services/api';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    status: 'idle',
    hits: [],
  };

componentDidUpdate(_, prevState) {
  const {searchValue, page} = this.state;
  if (prevState.searchValue !== searchValue || prevState.page !== page) {
    this.setState({status: 'loading',});
    API.queryOptions.q = searchValue;
    API.fetchGallery(API.queryOptions).then(result =>console.log(result.data) )
    

    }
  }




  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const {page, status, hits} = this.state;


    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <p>Searching...</p>}
        {status === 'loading' && <p>Loading...</p>}
      </div>
    );
  }
}
