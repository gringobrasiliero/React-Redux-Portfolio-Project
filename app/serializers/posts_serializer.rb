class PostsSerializer < ActiveModel::Serializer
  attributes :id, :post, :title, :description, :url, :urlToImage, :publishedAt, :category_id, :created_at
  belongs_to :categories, serializer: CategoryPostSerializer
end
