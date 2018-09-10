class Post < ApplicationRecord
  belongs_to :category

  has_many :comments, dependent: :destroy

  validates :url, uniqueness: true
  validates :description, uniqueness: true

end
