import { useState } from "react";
import "./Movies.scss";

export default function Movies() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Terminator",
      genre: "Action",
      stock: 6,
      rate: 2.5,
    },
    {
      id: 2,
      title: "Die Hard",
      genre: "Action",
      stock: 5,
      rate: 2.5,
    },
    {
      id: 3,
      title: "Get Out",
      genre: "Thriller",
      stock: 8,
      rate: 3.5,
    },
    {
      id: 4,
      title: "Trip to Italy",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
    {
      id: 5,
      title: "Airplane",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
  ]);
   
   const handleClick = (id) => {
      setMovies(movies.filter(movie => movie.id !== id))
   }
   
  return (
    <table className="movies">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      {movies.map((movie) => (
        <tbody key={movie.id}>
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.stock}</td>
            <td>{movie.rate}</td>
            <td>
              <button className="movies__btn" onClick={() => handleClick(movie.id)}>Delete</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
