import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      API.fetchGallery(API.queryOptions).then(result => {
        this.setState(prevState => ({
          status: 'resolved',
          hits: [...prevState.hits, ...result.data.hits],
          totalhits: result.data.totalHits,
          lastpage: Math.ceil(result.data.totalHits / 12),
        }));
        console.log(result.data);
      });
    }
  }

  handleFormSubmit = searchValue => {
    if (searchValue.trim() === '') {
      toast('🦄 Wow so easy!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      this.setState({ searchValue });
    }
  };

  loadNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  render() {
    const { page, status, hits, totalhits, lastpage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <p>Searching...</p>}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'resolved' && totalhits > 0 && (
          <ImageGallery options={hits} />
        )}
        {totalhits === 0 && <p>No results found</p>}
        {totalhits > 12 && page !== lastpage && (
          <button type="button" onClick={this.loadNextPage}>
            load more
          </button>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
