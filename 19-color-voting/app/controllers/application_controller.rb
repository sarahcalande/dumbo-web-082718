class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private


  # def setup_voting_attrs
  #   # byebug

  #   #first time
  #   unless session[:votes]
  #     session[:votes] = 5
  #   end

  #   @votes = session[:votes]

  #   @can_vote = @votes > 0
  # end

  # def use_one_vote
  #   @votes -= 1
  #   session[:votes] = @votes
  # end

  def setup_voting_attrs
    unless session[:user_id] 
      @user = User.create
      session[:user_id] = @user.id
    else
      @user = User.find(session[:user_id])
    end
    @votes = @user.remaining_votes
    @can_vote = @user.can_vote?
    @message = flash[:message]
  end


end
