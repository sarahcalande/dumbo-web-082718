class VotesController < ApplicationController

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: session[:user_id])
      # use_one_vote
      flash[:message] = "Thank you for voting!";
    end
    redirect_to colors_path
  end

end