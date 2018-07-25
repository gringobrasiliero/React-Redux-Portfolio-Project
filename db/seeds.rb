# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = 2.times do
  Category.create([{category: 'All'},{category: 'Dogs'},{category: 'Cats'},])

end

user = User.create!(username: "nyanCat", id: 1, email: "buzz@lightyear.com", password: "password", created_at: Time.now)

posts = 2.times do
  Post.create!([{post: "post1", category_id: 1, created_at: Time.now } ])
    Post.create!([{post: "post2", category_id: 2, created_at: Time.now } ])
end
