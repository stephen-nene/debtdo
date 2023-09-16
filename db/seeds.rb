require "faker"

puts "🔐 Seeding users..."

# Create users
users = []
5.times do |n|
  user = User.create(
    username: "stevo_nene#{n + 1}",
    email: "stevekid#{n + 1}@gmail.com",
    password: "password",
  )
  users << user
end
pp "👤 Created #{User.count} users ... ✅"

pp "📅 Seeding day tasks..."

7.times do |day|
  users.each do |user|
    priorities = Array.new(3) { Faker::Hacker.say_something_smart }
    user.day_tasks.create(
      priorities: priorities,
      created_at: Date.today - day,
    )
  end
end
puts "📆 Created #{DayTask.count} day task ... ✅"

puts "🧠 Seeding brain dumps..."
# Create brain dumps for each day task
DayTask.all.each do |day_task|
  rand(5..7).times do
    content = Faker::Lorem.sentence
    day_task.brain_dumps.create(content: content)
  end
end

puts "🧠 Created #{BrainDump.count} brain dumps ... ✅"


puts "✅ Seed completed!"
