class Comment < ApplicationRecord
  belongs_to :post
  validates_presence_of :comment, :created_at
end
