class VotesSerializer < ActiveModel::Serializer
  attributes :id, :post_id,:upvote, :downvote, :likes, :user_id, :created_at, :updated_at
end
