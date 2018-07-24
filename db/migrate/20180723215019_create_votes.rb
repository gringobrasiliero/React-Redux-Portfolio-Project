class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :upvote
      t.integer :downvote
      t.boolean :likes
      t.references :post, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
