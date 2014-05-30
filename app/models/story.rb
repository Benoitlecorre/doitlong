class Story < ActiveRecord::Base
  belongs_to :author
  has_many :pictures

  accepts_nested_attributes_for :pictures
end
