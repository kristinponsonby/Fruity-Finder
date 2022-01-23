class FruitySearch
    attr_reader :response, :fruits

    def initialize
        url = URI("https://www.fruityvice.com/api/fruit/all")

        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true
        
        request = Net::HTTP::Get.new(url)
        
        response = https.request(request)
        @response = JSON.parse(response.read_body)
        @fruits = @response['fruits']
    end

    def to_fruits
        fruit_ids = self.fruits.map do |fruit| 
            Fruit.find_or_create_by(fruity_vice_id: fruit["id"]) do |fruit|
                fruit.genus = fruit["genus"]
                fruit.name = fruit["name"]
                fruit.family = fruit["family"]
                fruit.order = fruit["order"]
            end.id
        end
        Fruit.where(id: fruit_ids)
    end


end