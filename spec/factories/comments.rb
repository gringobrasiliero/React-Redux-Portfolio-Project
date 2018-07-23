FactoryBot.define do
  factory :comment do
    comment { Faker::Lorem.word }
    created_at { Time.now }
    user_id {1}
    post_id {1}
  end
end
