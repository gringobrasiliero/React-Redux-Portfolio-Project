FactoryBot.define do
  factory :category do
    category { Faker::Lorem.word }
    created_at { Faker::Number.number(10) }
  end
end
