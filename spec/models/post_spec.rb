require 'rails_helper'


RSpec.describe Post, type: :model do
  # Association test

 it { should belong_to(:category).dependent(:destroy) }

 it { should have_many(:comments)}
 it { should have_many(:votes)}

  # Validation tests

  it { should validate_presence_of(:post) }
  it { should validate_presence_of(:created_at) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:category_id) }
end
