class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.references :story, index: true

      t.timestamps
    end
  end
end
