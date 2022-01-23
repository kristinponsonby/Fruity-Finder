class FruitsController < ApplicationController
    #GET /fruits
    def index
        fruits = Fruit.all 
        render json: fruits
    end

    #GET fruits/1
    def show 
        fruit = Fruit.find(params[:fruity_vice_id])
        render json: fruit
    end



end
