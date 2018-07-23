FactoryBot.define do
  factory :post do
    post { Faker::Lorem.word }
    created_at { Time.now }
    category_id {Faker::Number.number(10)}
    user_id {Faker::Number.number(10)}
  end
end
