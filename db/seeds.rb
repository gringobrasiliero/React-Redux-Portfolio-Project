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


posts = 2.times do
  Post.create!([{post: "post1",
     category_id: 1,
      title: "Title1",
      description: "This is a description",
       url: "www.google.com",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
         created_at: Time.now,
          } ])
  Post.create!([{post: "post1",
      category_id: 2,
      title: "Title2",
      description: "This is another description",
      url: "www.google.com",
      urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      created_at: Time.now,
        } ])
end


comment = 2.times do
        Comment.create!({
          comment: "This is a comment.",
          post_id: 1,
          created_at: Time.now,
          updated_at: Time.now,  })

          Comment.create!({
            comment: "This is another comment, not a commit.",
            post_id: 2,
            created_at: Time.now,
            updated_at: Time.now,  })
end
