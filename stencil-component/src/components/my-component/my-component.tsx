import { Component, h } from '@stencil/core';
// import { format } from '../../utils/utils';
import { MoviesType } from '../movies-component/movies-component';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})

export class MyComponent {


  // TEST DATA
  movies: MoviesType = [
    {Title: 'Friends', Year: '1994–2004', imdbID: 'tt0108778', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0Mz…jllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},
    {Title: 'Friends with Benefits', Year: '2011', imdbID: 'tt1632708', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_SX300.jpg'},
    {Title: 'Just Friends', Year: '2005', imdbID: 'tt0433400', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg'},
    {Title: 'How to Lose Friends & Alienate People', Year: '2008', imdbID: 'tt0455538', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjY0MzFmMD…WE2YTYzXkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg'},
    {Title: 'Friends: The Reunion', Year: '2021', imdbID: 'tt11337862', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODI0MzdhOD…ThkZGM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {Title: 'Friends with Kids', Year: '2011', imdbID: 'tt1720616', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTcyMDI2NjU2Ml5BMl5BanBnXkFtZTcwNjA4MzQzNw@@._V1_SX300.jpg'},
    {Title: 'We Are Your Friends', Year: '2015', imdbID: 'tt3787590', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE2NjIxODUxNF5BMl5BanBnXkFtZTgwMjI1MzM1NjE@._V1_SX300.jpg'},
    {Title: 'Friends with Money', Year: '2006', imdbID: 'tt0436331', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE3Mjc3NjQ5NV5BMl5BanBnXkFtZTYwMjY5MjE3._V1_SX300.jpg'},
    {Title: "Foster's Home for Imaginary Friends", Year: '2004–2009', imdbID: 'tt0419326', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjYyNGFjOT…zA3ODc5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg'},
  ]

  render() {
    return <div>
      <movies-component movies={this.movies}></movies-component>
    </div>;
  }
}
