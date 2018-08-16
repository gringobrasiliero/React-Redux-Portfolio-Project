class Post < ApplicationRecord
  belongs_to :category, dependent: :destroy

  has_many :comments
  has_many :votes

  validates :url, uniqueness: true
  validates :description, uniqueness: true

end
