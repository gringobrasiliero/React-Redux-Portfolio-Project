class Category < ApplicationRecord
  has_many :posts

validates_presence_of :category
validates :category, uniqueness: true

end
