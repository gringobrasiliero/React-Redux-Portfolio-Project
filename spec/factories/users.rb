FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    username { Faker::Pokemon.unique.name }
    password {"Password"}
    created_at { Time.now }
  end
end
