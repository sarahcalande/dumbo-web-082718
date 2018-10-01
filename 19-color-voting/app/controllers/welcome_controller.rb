class WelcomeController < ApplicationController

  def index
    redirect_to colors_path
  end
end