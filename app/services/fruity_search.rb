class FruitySearch
    attr_reader :fruits

    def initialize
        url = URI("https://www.fruityvice.com/api/fruit/all")

        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true
        
        request = Net::HTTP::Get.new(url)
        
        response = https.request(request)
        @fruits = JSON.parse(response.read_body)
       
    end

    def to_fruits
        fruit_ids = self.fruits.map do |fruit| 
            Fruit.find_or_create_by(fruity_vice_id: fruit["id"]) do |record|
                record.genus = fruit["genus"]
                record.name = fruit["name"]
                record.family = fruit["family"]
                record.order = fruit["order"]
            end.id
        end
        binding.pry
        Fruit.where(id: fruit_ids)
    end
    

end

