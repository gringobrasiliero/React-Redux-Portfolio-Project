FactoryBot.define do
  factory :category do
    category { Faker::Lorem.word }
    created_at { Time.now }
  end
end
