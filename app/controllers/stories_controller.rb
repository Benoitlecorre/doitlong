class StoriesController < ApplicationController
  before_action :set_flat, only: [:show, :edit, :update, :destroy]


  def index
    @stories = Story.all
  end

  def show
    #before_action :set_flat
  end

  def new
    @story = Story.new
  end

  def edit
    #before_action :set_flat
  end

  def create
    story = Story.create(story_params)

    redirect_to story_path(story)
  end

  def update
    #before_action :set_flat
    @story.update!(story_params)
  end

  def destroy
    #before_action :set_flat
    @story.destroy

    redirect_to stories_path
  end

  private

  def set_story
    @story = Story.find(params[:id])
  end

  def story_params
    params.require(:story).permit(:title, :body)
  end

end
