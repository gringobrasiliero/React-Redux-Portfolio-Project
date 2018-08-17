


let ArticleSearch = ({props}) => (

<div className='searchable-articles'>
  <h3><strong> Search for new Posts </strong>
    <form onSubmit={ (e) => props.handleSubmit(e) }>
      <input type="text" id="catForm" onChange={(e) => props.handleChange(e)} value={this.props.text} />
      <input type='submit' value="Submit" />
    </form>
  </h3>
</div>

)

export default ArticleSearch
