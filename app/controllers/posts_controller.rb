class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index

    if params[:category_id]
      @posts = Category.find(params[:category_id]).posts
    else

    @posts =  Post.all
  end
  
    json_response(@posts)
  end

  def create
    @post = Post.create!(post_params)
  json_response(@post, :created)
  end


  def update
    @post.update!(post_params)
    head :no_content
  end

  def show
    json_response(@post)
  end

  def destroy
    @post.destroy
    head :no_content
  end

  private

  def post_params
    params.permit( :created_at, :category_id, :title, :description, :url, :urlToImage, :publishedAt, :created_at, :publishedAt)
  end
  def set_post
    @post = Post.find(params[:id])
  end


end
