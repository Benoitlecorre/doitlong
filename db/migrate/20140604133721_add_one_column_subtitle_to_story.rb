class AddOneColumnSubtitleToStory < ActiveRecord::Migration
  def change
    add_column :stories, :subtitle, :text
  end
end
