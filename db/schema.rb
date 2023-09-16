# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_16_104659) do
  create_table "brain_dumps", force: :cascade do |t|
    t.integer "day_task_id", null: false
    t.text "content"
    t.index ["day_task_id"], name: "index_brain_dumps_on_day_task_id"
  end

  create_table "day_tasks", force: :cascade do |t|
    t.integer "user_id", null: false
    t.json "priorities"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_day_tasks_on_user_id"
  end

  create_table "debts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "name"
    t.string "status"
    t.float "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_debts_on_user_id"
  end

  create_table "time_frames", force: :cascade do |t|
    t.integer "daytask_id", null: false
    t.string "task"
    t.text "description"
    t.time "start"
    t.time "end"
    t.index ["daytask_id"], name: "index_time_frames_on_daytask_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "brain_dumps", "day_tasks"
  add_foreign_key "day_tasks", "users"
  add_foreign_key "debts", "users"
  add_foreign_key "time_frames", "daytasks"
end
