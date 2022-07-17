import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { AppWrapper } from './components/common/AppWrapper';
import { Idle } from './components/Idle/Idle';
import { UncorrectSearch } from './components/UncorrectSearch/UncorrectSearch';
import { LoadMoreBtn } from './components/common/LoadMoreBtn';
import { LoaderSpinner } from './components/common/Loader/Loader';
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
    const { page, searchValue } = this.state;
    if (page !== 1 && prevState.page !== page) {
      this.setState({ status: 'loading' });
      API.fetchGallery({ page, q: searchValue }).then(result => {
        this.setState(prevState => ({
          status: 'resolved',
          hits: [...prevState.hits, ...result.data.hits],
        }));
      });
    }
    if (page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = searchValue => {
    if (searchValue.trim() === '') {
      toast.warn('Please enter a search term!');
    } else {
      this.setState({
        status: 'loading',
        searchValue,
        page: 1,
      });
      API.fetchGallery({ q: searchValue, page: 1 }).then(result => {
        this.setState({
          status: 'resolved',
          hits: result.data.hits,
          totalhits: result.data.totalHits,
          lastpage: Math.ceil(result.data.totalHits / 12),
        });
      });
    }
  };

  loadNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { page, status, hits, totalhits, lastpage } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <Idle />}
        {status === 'loading' && <LoaderSpinner />}
        {status === 'resolved' && totalhits > 0 && (
          <ImageGallery options={hits} />
        )}
        {totalhits === 0 && status === 'resolved' && <UncorrectSearch />}
        {totalhits > 12 && page !== lastpage && (
          <LoadMoreBtn type="button" onClick={this.loadNextPage}>
            load more
          </LoadMoreBtn>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppWrapper>
    );
  }
}
