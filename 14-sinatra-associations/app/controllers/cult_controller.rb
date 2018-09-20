class CultController < ApplicationController

  get "/cults" do
    @cults = Cult.all.shuffle
    erb :"cults/index"
  end

  get "/cults/:id" do
    @cult = Cult.includes(:followers).find(params[:id])
    erb :"cults/show"
  end

end 