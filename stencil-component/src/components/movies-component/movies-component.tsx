import { Component, Prop, h } from '@stencil/core';


export type MovieType = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
}
export type MoviesType = MovieType[];

@Component({
  tag: 'movies-component',
  styleUrl: 'movies-component.css',
  shadow: true,
})


export class MoviesComponent {

  @Prop() movies: MoviesType;

  render() {
    return (
      // <p>Test</p>
      this.movies.map( m =>

      <div>
          <h1>{m.Title}</h1>
          <p>{m.Year}</p>
          <img src={m.Poster}></img>
      </div>


      )
    );
  }

}
