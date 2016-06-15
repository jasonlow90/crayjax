class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :priority, default: 3, index: true
      t.string :task
      t.string :tags, array: true, default: []
      t.boolean :done, default: false

      t.timestamps null: false
    end
  end
end
