import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  searchParameters: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchParameters: '',
  };

  render() {
    const { searchParameters } = this.state;

    const visibleMovies = moviesFromServer.filter(
      (movie) => movie.description.toLowerCase().includes(searchParameters.toLowerCase())
      || movie.title.toLowerCase().includes(searchParameters.toLowerCase()),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <div className="control">
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    onChange={(event) => this.setState({
                      searchParameters: event.target.value,
                    })}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList visibleMovies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
