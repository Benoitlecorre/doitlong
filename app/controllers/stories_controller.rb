class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html


  def index
    @stories = Story.all
  end

  def show
    #before_action :set_story
  end

  def new
    @story = Story.new
  end

  def edit
    #before_action :set_story
  end

  def create
    story = Story.create(story_params)

    redirect_to story_path(story)
  end

  def update
    #before_action :set_story
    @story.update!(story_params)
    respond_with do |format|
      format.js
      format.html { redirect_to story_path(@story) }
    end
  end

  def destroy
    #before_action :set_story
    @story.destroy

    redirect_to stories_path
  end

  private

  def set_story
    @story = Story.find(params[:id])
  end

  def story_params
    params.require(:story).permit(:title, :body, :container_left, :container_center, :container_right )
  end

end
