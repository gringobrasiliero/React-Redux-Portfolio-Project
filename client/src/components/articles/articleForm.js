import React, { Component } from 'react';

export const ArticleForm = (props) =>

    <form onSubmit={props.handleNeddit}>
      <input type="text" id="title" name="title" onChange={(e) => this.handleTitleChange(e)} value={props.title} style={{display: 'none'}} />
      <input type="text" id="url" name="url" onChange={(e) => this.handleChange(e)} value={props.url} style={{display: 'none'}} />
      <input type="text" name="urlToImage" id="urlToImage" onChange={(e) => this.handleChange(e)} value={props.urlToImage} style={{display: 'none'}} />
      <input type="text" id="description" name="description" onChange={(e) => this.handleChange(e)} value={props.description} style={{display: 'none'}} />
      <input type="submit" value="Neddit" />

    </form>;
