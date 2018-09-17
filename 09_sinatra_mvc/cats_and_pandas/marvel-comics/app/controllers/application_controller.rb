require './config/environment'

class ApplicationController < Sinatra::Base

  def potato
    return "🥔"
  end

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end


  get "/" do 

  end


  get "/superheroes/:id" do
    @superhero = Superhero.find(params[:id])
    erb :superheroes
  end

end
