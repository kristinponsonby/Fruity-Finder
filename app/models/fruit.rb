class Fruit < ApplicationRecord
    def self.fetch_fruits
        FruitySearch.new.to_fruits
    end
end
