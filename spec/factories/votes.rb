FactoryBot.define do
  factory :vote do
    upvote {Faker::Number.number(2).to_i }
    downvote { Faker::Number.number(2).to_i }
    likes {Faker::Boolean.boolean(0.5)}
    created_at { Time.now }
  end
end
