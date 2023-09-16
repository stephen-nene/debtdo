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
    content = Faker::Quotes::Shakespeare.as_you_like_it_quote
    day_task.brain_dumps.create(content: content)
  end
end

puts "🧠 Created #{BrainDump.count} brain dumps ... ✅"

puts "⏰ Seeding time frames..."

# Create time frames for each day task
DayTask.all.each do |day_task|
  rand(4..6).times do
    start_time = rand(1..3).hours.ago.strftime("%H:%M:%S")
    end_time = (rand(1..3) + 1).hours.ago.strftime("%H:%M:%S")

    day_task.time_frames.create(
      task: Faker::Quote.singular_siegler,
      description: Faker::Quotes::Shakespeare.hamlet_quote,
      start: start_time,
      end: end_time
    )
  end
end
puts "⏰ Created #{TimeFrame.count} time frames ... ✅"


puts "✅ Seed completed!"
