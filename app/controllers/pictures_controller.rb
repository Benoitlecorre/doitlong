class PicturesController < ApplicationController
  respond_to :js

  def create
    file = params[:file]
    picture = Picture.create(picture_file_name: file.original_filename)
    picture.picture = file
    picture.save

    render text: picture.picture.url(:medium)
  end

  def destroy
    Picture.find(params[:id]).destroy!

    render json: { status: 'OK' }
  end
end
