class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :stock_id
      t.integer :stock_amount
      t.integer :price
      t.timestamps
    end
  end
end
