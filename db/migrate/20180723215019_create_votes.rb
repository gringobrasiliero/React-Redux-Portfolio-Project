class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :upvote
      t.integer :downvote
      t.boolean :likes
      t.timestamps
    end
  end
end
