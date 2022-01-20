class CreateFruits < ActiveRecord::Migration[5.2]
  def change
    create_table :fruits do |t|
      t.string :genus
      t.string :name
      t.string :family
      t.string :order
      t.timestamps
    end
  end
end
