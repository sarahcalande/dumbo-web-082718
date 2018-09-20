class BloodOathController < ApplicationController

  get '/blood-oaths/new' do
    @all_cults = Cult.all
    @all_followers = Follower.all
    erb :"blood-oaths/new"
  end

  #make a new blood oath
  post "/blood-oaths" do 
    @blood_oath = BloodOath.create(params[:blood_oath])
    redirect to "/followers/#{ @blood_oath.follower_id }"
  end

  get "/blood-oaths" do
    @blood_oaths = BloodOath.all
    erb :"blood-oaths/index"
  end

  delete "/blood-oaths/:id" do
    BloodOath.delete(params[:id])
    redirect to "/blood-oaths"
  end

end 