class PostCommentsSerializer < ActiveModel::Serializer
attributes :post_id, :created_at, :id, :comment, :updated_at
end
