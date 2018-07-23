require 'rails_helper'

RSpec.describe Comment, type: :model do

# Association Test
it { should belong_to(:user).dependent(:destroy) }
it { should belong_to(:post).dependent(:destroy) }

# Validation Testing
end
