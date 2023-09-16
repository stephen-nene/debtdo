class CreateDayTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :day_tasks do |t|
      t.references :user, null: false, foreign_key: true
      t.json :priorities

      t.timestamps
    end
  end
end
