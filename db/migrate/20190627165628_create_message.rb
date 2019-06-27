class CreateMessage < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string "body", null: false
      t.integer "author_id", null: false
      t.integer "channel_id", null: false
      t.integer "thread_id"
      
      t.timestamps
    end
    add_index :messages, :channel_id, unique: true
    add_index :messages, :author_id, unique: true
    add_index :messages, :thread_id
  end
end