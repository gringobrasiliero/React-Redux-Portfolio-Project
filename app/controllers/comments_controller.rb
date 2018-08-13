class CommentsController < ApplicationController
before_action :set_comment, only: [:show, :update, :destroy]
def index
  @comments = Comment.all
  json_response(@comments)
end

def create
  @comment = Comment.create!(comment_params)
json_response(@comment, :created)
end

def show
  json_response(@comment)
end

def destroy
  @comment.destroy
  head :no_content
end

private

def comment_params
  params.permit(:comment, :created_at)
end

def set_comment
  @comment = Comment.find(params[:id])
end
end
