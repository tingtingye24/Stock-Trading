class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :stock_name
      t.float :stock_price

      t.timestamps
    end
  end
end
