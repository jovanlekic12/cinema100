export function FillArray(arr, numberOfMovies, moviesPerPage) {
  for (let i = 1; i <= Math.round(numberOfMovies / moviesPerPage); i++) {
    arr.push(i);
  }
}
