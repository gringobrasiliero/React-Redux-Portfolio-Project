export const FETCH_POSTS = 'posts:fetchPosts';



export function fetchPosts() {
  return dispatch => {
    fetch('/categories').then(response => response.json())
      .then(categories => console.log(categories))

  }
}
