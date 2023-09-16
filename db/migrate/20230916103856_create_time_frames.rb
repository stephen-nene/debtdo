class CreateTimeFrames < ActiveRecord::Migration[7.0]
  def change
    create_table :time_frames do |t|
      t.references :daytask, null: false, foreign_key: true
      t.string :task
      t.text :description
      t.time :start
      t.time :end

      t.timestamps
    end
  end
end
