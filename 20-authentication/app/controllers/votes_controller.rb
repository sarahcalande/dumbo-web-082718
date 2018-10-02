class VotesController < ApplicationController

  before_action :"authenticate!"

  # skip_before_action :verify_authenticity_token

  def index
    @params_user = User.find_by(username: params[:user_id])
    if (authenticated?(@params_user.id))
      @user_votes = Vote.includes(:color).where(user_id: @params_user.id)
    else
      redirect_to new_session_path
    end
  end
  
  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: session[:user_id])
      # use_one_vote
      flash[:message] = "Thank you for voting for ##{ @vote.color.hex }!";
    else
      @seconds_to_next_vote = 60 - (@minutes_to_next_vote * 60).floor
      flash[:errors] = ["You can't vote for another #{ (@seconds_to_next_vote == 1) ? "second" : (@seconds_to_next_vote.to_s + " seconds") } 💁‍♀️"];
    end
    redirect_to colors_path
  end

  def destroy
    Vote.find(params[:id]).destroy
    redirect_to user_votes_path(current_user.username)
  end

end