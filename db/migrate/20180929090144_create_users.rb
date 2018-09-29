class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :shortname
      t.string :reknown
      t.string :bio

      t.timestamps
    end
  end
end
