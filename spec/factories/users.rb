FactoryBot.define do
  factory :user do
    email { Faker::Lorem.word }
    username { Faker::Lorem.word }
    created_at { Time.now }
  end
end
