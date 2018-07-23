FactoryBot.define do
  factory :comment do
    comment { Faker::Lorem.word }
    created_at { Time.now }
    user_id {Faker::Number.number(10)}
    post_id {Faker::Number.number(10)}
  end
end
