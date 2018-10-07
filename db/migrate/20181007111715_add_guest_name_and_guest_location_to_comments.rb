class AddGuestNameAndGuestLocationToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :guestName, :string
    add_column :comments, :guestLocation, :string
  end
end
