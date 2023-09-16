class CreateBrainDumps < ActiveRecord::Migration[7.0]
  def change
    create_table :brain_dumps do |t|
      t.references :day_task, null: false, foreign_key: true
      t.text :content

    end
  end
end
