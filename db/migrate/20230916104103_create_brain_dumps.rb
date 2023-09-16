class CreateBrainDumps < ActiveRecord::Migration[7.0]
  def change
    create_table :brain_dumps do |t|
      t.references :daytask, null: false, foreign_key: true
      t.text :Content

      t.timestamps
    end
  end
end
