class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :post
      t.timestamps
      t.references :category, foreign_key: true

    end
  end
end
