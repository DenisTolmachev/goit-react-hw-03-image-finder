import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
