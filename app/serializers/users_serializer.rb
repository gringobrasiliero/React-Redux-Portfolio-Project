class UsersSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :created_at, :updated_at
  has_many :comments
  has_many :votes
end
