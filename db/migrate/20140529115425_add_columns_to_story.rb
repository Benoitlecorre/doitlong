class AddColumnsToStory < ActiveRecord::Migration
  def change
    add_column :stories, :container_left, :text
    add_column :stories, :container_center, :text
    add_column :stories, :container_right, :text
  end
end
