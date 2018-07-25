class CategoriesSerializer < ActiveModel::Serializer
  attributes :id, :category, :created_at
  has_many :posts, serializer: CategoryPostSerializer
end
