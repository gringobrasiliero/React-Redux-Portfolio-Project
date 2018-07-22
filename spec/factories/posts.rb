FactoryBot.define do
  factory :post do
    post { Faker::Lorem.word }
    created_at { Faker::Number.number(10) }
  end
end
