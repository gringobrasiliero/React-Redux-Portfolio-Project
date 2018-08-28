class PostsSerializer < ActiveModel::Serializer
  attributes :id, :post, :title, :description, :url, :urlToImage, :publishedAt, :category_id, :created_at, :likes
  belongs_to :categories, serializer: CategoryPostSerializer
  has_many :comments, serializer: PostCommentsSerializer
end
