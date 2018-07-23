require 'rails_helper'


RSpec.describe Post, type: :model do
  # Association test

 it { should belong_to(:category).dependent(:destroy) }
 it { should belong_to(:user)}
 it { should have_many(:comments)}
  # Validation tests

  it { should validate_presence_of(:post) }
  it { should validate_presence_of(:created_at) }
end
