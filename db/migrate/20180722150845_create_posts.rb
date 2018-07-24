class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :post
      t.string :title
      t.string :description
      t.string :url
      t.string :urlToImage
      t.string :publishedAt

      t.references :category, foreign_key: true
    
      t.timestamps
    end
  end
end
