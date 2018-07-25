class CategoryPostSerializer < ActiveModel::Serializer
attributes :post_id, :category_id, :post, :title, :description, :url, :urlToImage, :publishedAt, :category_id, :created_at
end
