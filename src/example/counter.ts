// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `Count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

// let url = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher';

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjIzODFlZjUxYjQ3ZWIyMmQ0OWZkZWM1ZTA1YjUzMCIsIm5iZiI6MTc5MTAyOTU3MC43MDcsInN1YiI6IjZhYzBmMTQyODQ1MTM4MDA4NGZkYWNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBGeiaUQ3bGqGsx1uGSatoFj6fUueCP5LbplTj11pIA'
//   },
// };

// let response = await fetch(url, options);

// let commits = await response.json();

// console.log(commits);