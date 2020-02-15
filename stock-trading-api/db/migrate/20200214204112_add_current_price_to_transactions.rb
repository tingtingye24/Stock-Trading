class AddCurrentPriceToTransactions < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :current_price, :float
  end
end
