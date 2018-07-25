require 'rails_helper'

RSpec.describe User, type: :model do
  # Model Testing

it { should have_many(:comments).dependent(:destroy) }

# Validation testing
  it { should validate_presence_of(:email) }
    it { should validate_presence_of(:username) }
end
