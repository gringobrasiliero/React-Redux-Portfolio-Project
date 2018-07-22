class Category < ApplicationRecord
  has_many :posts

validates_presence_of :category
end
