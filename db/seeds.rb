
require 'faker'

puts "🔐 Seeding users..."

5.times do |n|
  User.create(
    username: "stevo_nene#{n + 1}",
    email: "stevekid#{n + 1}@gmail.com",
    password: "password"
  )

  print "👤 Creating user #{n + 1}..."
  sleep(0.005)
  puts " ✅"
end