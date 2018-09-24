class CatsController < ApplicationController

  before_action :get_cat, only: [:show, :edit, :update]


  # get "/cats" do
  #   @cats = Cat.all
  #   erb: "cats/index"
  # end


  def index
    @cats = Cat.all
  end



  # get "/cats/:id do"
  def show

  end

  def edit

  end


  def update
    # if @cat.year > DateTime.new.year || @cat.fluffiness.class != "Fixnum" || 
    if @cat.update(cat_params)
      redirect_to @cat
    else
      render :edit
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :birth_year, :fluffiness)
  end

  def get_cat
    @cat = Cat.find(params[:id])
  end

end