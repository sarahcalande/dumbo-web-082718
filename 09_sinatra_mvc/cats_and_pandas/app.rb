require 'sinatra'

get '/baby-panda' do
  "<img src='https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/babypandabor.jpg' />"
end

get '/cat' do
  "Hi I am a cat"
end

get '/' do
  "Hello World"
end



# p Sinatra::Application.routes



# http://localhost:9292/baby-panda