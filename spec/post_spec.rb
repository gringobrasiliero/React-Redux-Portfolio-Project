require 'rails_helper'

# Test suite for the Todo model
RSpec.describe Post, type: :model do
  # Association test
  # ensure Todo model has a 1:m relationship with the Item model
 it { should belong_to(:category).dependent(:destroy) }
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:post) }
  it { should validate_presence_of(:created_at) }
end
