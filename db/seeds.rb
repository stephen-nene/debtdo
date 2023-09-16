require 'faker'

puts "🔐 Seeding users..."

# Create users
users = []
5.times do |n|
  user = User.create(
    username: "stevo_nene#{n + 1}",
    email: "stevekid#{n + 1}@gmail.com",
    password: "password"
  )
  users << user
  print "👤 Creating user #{n + 1}..."
  sleep(0.005)
  puts " ✅"
end

puts "📅 Seeding day tasks..."

# Create day tasks for the past 7 days
current_date = Date.today
7.times do |day|
    users.each do |user|
      rand(3..5).times do
        priorities = Array.new(3) { Faker::Hacker.say_something_smart }
        user.day_tasks.create(
        priorities: priorities,
        created_at: current_date - day
        )
  end
end
  print "📆 Creating day tasks for #{current_date - day}..."
  sleep(0.005)
  puts " ✅"
end

puts "✅ Seed completed!"



# Create BrainDumps
# 10.times do
#     BrainDump.create(
#       daytask_id: rand(1..10), # Replace with actual daytask_id values
#       Content: Faker::Hacker.say_something_smart
#     )
#   end
  
#   puts 'BrainDumps seeded successfully!'
