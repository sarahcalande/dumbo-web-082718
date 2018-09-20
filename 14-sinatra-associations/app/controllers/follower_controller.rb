class FollowerController < ApplicationController

  get "/followers" do
    @followers = Follower.all.shuffle
    erb :"followers/index"
  end

  # get "/followers/:id" do
  #   @follower = Follower.find(params[:id])

  #   p "call .cults"
  #   @cults = @follower.cults

  #   p "still no database"

  #   @cult_names = @follower.cults.map do |cult| 
  #     cult.name
  #   end 

  #   p "SQL ^^^^^^"

  #   # 
  #   # @cult_names = @follower.cults.map(&:name)
  #   puts "HEERE \\/ BE NO MORE DATABASE PLEASE 🛢"
  #   erb :"followers/show"
  # end


  get "/followers/:id" do
    @follower = Follower.includes(:cults).find(params[:id])
    erb :"followers/show"
  end


end 