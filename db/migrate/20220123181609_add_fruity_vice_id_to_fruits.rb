class AddFruityViceIdToFruits < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :fruity_vice_id, :integer
  end
end
