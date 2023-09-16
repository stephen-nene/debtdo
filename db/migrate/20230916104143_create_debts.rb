class CreateDebts < ActiveRecord::Migration[7.0]
  def change
    create_table :debts do |t|
      t.references :user, null: false, foreign_key: true
      t.text :name
      t.string :status
      t.float :amount
      
      t.timestamps
    end
  end
end
