class Post < ApplicationRecord
  belongs_to :category, dependent: :destroy
  belongs_to :user
  has_many :comments
  has_many :votes
  validates_presence_of :post, :created_at
end
