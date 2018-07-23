class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :update, :destroy]

  def index
    @votes = Post.all
    json_response(@votes)
  end

  def create
    @vote = Post.create!(vote_params)
  json_response(@vote)
  end

  def update
    @vote.update(vote_params)
    head :no_content
  end

  def show
    json_response(@vote)
  end

  def destroy
    @vote.destroy
    head :no_content
  end

  private

  def vote_params
    params.permit(:upvote, :downvote, :likes)
  end
  def set_vote
    @vote = Post.find(params[:id])
  end



end
