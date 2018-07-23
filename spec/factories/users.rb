FactoryBot.define do
  factory :category do
    email { Faker::Lorem.word }
    username { Faker::Lorem.word }
    created_at { Faker::Number.number(10) }
  end
end
