import React from 'react'



const ArticleSearch = ({onHandleChange, onHandleSubmit, value }) => (

  <div className='searchable-articles'>
    <h3><strong> Search for new Posts </strong>
      <form onSubmit={onHandleSubmit}>
        <input type="text" id="catForm" onChange={onHandleChange} value={value} />
        <input type='submit' value="Submit" />
      </form>
    </h3>
  </div>
)

export default ArticleSearch
