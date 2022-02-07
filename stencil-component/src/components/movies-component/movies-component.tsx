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

      this.movies.map( m =>

      <div class="container">
          <div>
            <img src={m.Poster} alt="Poster"></img>
          </div>
          <div>
            <h3>{m.Title}</h3>
            <p>{"Year: " + m.Year}</p>
            <button>Read more</button>
          </div>
      </div>
      )
    );
  }

}
