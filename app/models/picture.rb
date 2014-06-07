class Picture < ActiveRecord::Base
  belongs_to :story

  has_attached_file :picture, styles: { medium: "100%", thumb: "100x100>" }

  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

end
