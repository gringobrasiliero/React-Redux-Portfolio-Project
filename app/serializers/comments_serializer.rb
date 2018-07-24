class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :comment, :post_id, :user_id, :created_at, :updated_at
end
