class VotesController < ApplicationController

  def index
    
  end

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: session[:user_id])
      # use_one_vote
      flash[:message] = "Thank you for voting for ##{ @vote.color.hex }!";
    else
      @seconds_to_next_vote = 60 - (@minutes_to_next_vote * 60).floor
      flash[:message] = "You can't vote for another #{ (@seconds_to_next_vote == 1) ? "second" : (@seconds_to_next_vote.to_s + " seconds") } 💁‍♀️";
    end
    redirect_to colors_path
  end

end