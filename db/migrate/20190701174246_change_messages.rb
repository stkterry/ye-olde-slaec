class ChangeMessages < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, :channel_id
    remove_index :messages, :author_id

    add_index :messages, :channel_id
    add_index :messages, :author_id
  end
end
