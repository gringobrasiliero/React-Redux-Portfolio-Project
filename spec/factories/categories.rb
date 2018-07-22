FactoryBot.define do
  factory :todo do
    category { Faker::Lorem.word }
    created_at { Faker::Number.number(10) }
  end
end
