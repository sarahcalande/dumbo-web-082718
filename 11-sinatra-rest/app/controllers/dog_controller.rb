class DogController < ApplicationController
  get '/dogs' do
    # @best_puppers = Dog.all
    @breed_filter = params[:breed]
    
    if @breed_filter
      @best_puppers = Dog.search_by_breed(@breed_filter)
    else
      @best_puppers = Dog.all
    end
    erb :"dogs/index"
  end

  get '/dogs/new' do
    erb(:"dogs/new")
  end

  post '/dogs' do

    # @dog = Dog.new


    # @dog.age = params[:age]
    # @dog.name = params[:name]
    # @dog.breed = params[:breed]
    # @dog.pic = params[:pic]

    # @dog.save

    @dog = Dog.create(params)

    redirect "/dogs/#{ @dog.id }"
  end

  get "/dogs/:id" do
    @dog = Dog.find(params[:id])

    erb :"dogs/show"
  end


end