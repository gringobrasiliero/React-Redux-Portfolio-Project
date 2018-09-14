class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :comment, :post_id, :created_at, :updated_at
  belongs_to :posts, serializer: PostCommentsSerializer
end
