class Post < ApplicationRecord
  belongs_to :category, dependent: :destroy
  validates_presence_of :post, :created_at
end
