class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private

  def authenticate!
    unless logged_in?
      redirect_to new_session_path
    end
  end

  def authenticated?(user_id)
    current_user_id == user_id
  end

  #just for ruby
  def start_session(user_id)
    log_in_user(user_id)
  end

  def log_in_user(user_id)
    session[:user_id] = user_id
  end

  def logged_in?
    !!current_user_id
  end

  def current_user
    @current_user ||= User.find(current_user_id)
    @current_user
  end

  def log_out!
    session[:user_id] = nil
  end

  def current_user_id
    session[:user_id]
  end
  
  def setup_voting_attrs
    if current_user_id 
      @current_user = current_user
      @minutes_to_next_vote = @current_user.next_vote_available_minutes
      @votes = @current_user.remaining_votes
      @can_vote = @current_user.can_vote?
    end
    @message = flash[:message]
    @errors = flash[:errors]
  end


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



end
