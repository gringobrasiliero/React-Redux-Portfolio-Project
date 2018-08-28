class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :post
      t.string :title
      t.text :description
      t.text :url
      t.text :urlToImage
      t.string :publishedAt
      t.integer :likes, default: 0

      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
