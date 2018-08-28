# Google Books API "https://www.googleapis.com/books/v1/volumes?q={#{term}}"

require 'rest-client'
require 'json'
require 'pry'


def make_request
  beef = RestClient.get "https://www.reddit.com/.json"
  JSON.parse(beef.body)
  # binding.pry
end

def view(json)

  post_array = json["data"]["children"].map do |post|
    {
      title: post["data"]["title"],
      subreddit: post["data"]["subreddit"],
      score: post["data"]["score"]
    }
  end

  # binding.pry

  post_array.each do |post|
    puts "====================="
    puts "Title: #{post[:title]}"
    puts "Subreddit: #{post[:subreddit]}"
    puts "Score: #{post[:score]}"
    puts "====================="
  end


  # json["data"]["children"].each do |post|
  #   puts "====================="
  #   puts "Title: #{post["data"]["title"]}"
  #   puts "Subreddit: #{post["data"]["subreddit"]}"
  #   puts "Score: #{post["data"]["score"]}"
  #   puts "====================="
  # end
  # binding.pry
  # 0
end

view(make_request)
