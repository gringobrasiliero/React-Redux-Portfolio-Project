class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :userName
      t.string :password
      t.string :email
      t.string :token

      t.timestamps
    end
  end
end
