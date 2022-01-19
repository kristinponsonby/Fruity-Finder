class FruitsController < ApplicationController

    def index
        fruits = Fruit.all 
        render json: fruits
    end

    def show 
        fruit = Fruit.find(params[:id])
        render json: fruit
    end

end
