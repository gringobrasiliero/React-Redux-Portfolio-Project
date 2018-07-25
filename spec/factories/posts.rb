FactoryBot.define do
  factory :post do
    post { Faker::Lorem.word }
    created_at { Time.now }
    category_id {1}
    
  end
end
