class CreateChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string "name"
      t.integer "created_by", null: false
      t.string "purpose"
      t.string "topic"
      t.boolean "is_dm", null: false, default: false
      t.boolean "is_private", null: false, default: false

      t.timestamps
    end
    add_index :channels, :created_by
  end
end
