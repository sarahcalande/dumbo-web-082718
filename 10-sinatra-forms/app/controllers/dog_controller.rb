class DogController < ApplicationController
  get '/dogs' do
    # @best_puppers = Dog.all
    @breed_filter = params[:breed]
    
    if @breed_filter
      @best_puppers = Dog.search_by_breed(@breed_filter)
    else
      @best_puppers = Dog.all
    end
    erb :dogs
  end
end