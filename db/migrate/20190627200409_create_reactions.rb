class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|

      t.string "body", null: false
      t.integer "author_id", null: false
      t.integer "message_id", null: false

    end
    add_index :reactions, :author_id
    add_index :reactions, :message_id
  end
end
