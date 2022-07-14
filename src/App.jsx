import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import * as API from 'services/api';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    status: 'idle',
    hits: [],
    totalhits: null,
    lastpage: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ status: 'loading' });
      API.queryOptions.q = searchValue;
      API.queryOptions.page = page;
      API.fetchGallery(API.queryOptions).then(
        result => {
          this.setState(prevState => ({
            status: 'resolved',
            hits: [...prevState.hits, ...result.data.hits],
            totalhits: result.data.totalHits,
            lastpage: result.data.totalHits / 12,
          }));
          // console.log(result.data)
        }
        
      );
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  loadNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  render() {
    const { page, status, hits, totalhits } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <p>Searching...</p>}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'resolved' && <ImageGallery options={hits} />}
        {totalhits > 12 && (
          <button type="button" onClick={this.loadNextPage}>
            load more
          </button>
        )}
      </div>
    );
  }
}
