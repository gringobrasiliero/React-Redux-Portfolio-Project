export const FETCH_POSTS = 'FETCH_POSTS';



export const fetchPosts = () => {
  return (dispatch) => {
<<<<<<< master
<<<<<<< master
<<<<<<< master
    console.log(fetch('/posts'))
    fetch('/posts')
=======
    fetch(`/categories/${e.target.getAttribute('id')}/posts`)
>>>>>>> Component will update.
=======
alert("HI!");
    console.log(fetch('categories/1/posts'))
    fetch('categories/1/posts')
>>>>>>> Categories will no longer duplicate.
=======
    console.log(fetch('/posts'))
    fetch('/posts')
>>>>>>> Posts and Categories loaded from redux store
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
  }
}
