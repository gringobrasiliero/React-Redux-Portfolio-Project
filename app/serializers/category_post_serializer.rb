class CategoryPostsSerializer < ActiveModel::Serializer
attributes :post_id, :category_id, :post, :title, :description, :url, :urlToImage, :publishedAt, :created_at
end
