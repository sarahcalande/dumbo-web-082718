require 'pry'

class App

  MAPPING = {
    "/baby-panda" => "<img src='https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/babypandabor.jpg' />",
    "/cat" => "Hi I am a cat",
    "/dog" => "WOOF"
  }
  def call(environment_hash)
    status_code = 418
    header = { "Content-type" =>  "text/html"}
    body = ['hello'] # or {}
    # binding.pry


    path = environment_hash["REQUEST_PATH"]
    body = [ MAPPING[path] ]

    # if environment_hash["REQUEST_PATH"] == "/baby-panda"
    #   body = ["<img src='https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/babypandabor.jpg' />"]
    # elsif environment_hash["REQUEST_PATH"] == "/cat"
    #   body = ["Hi I am a cat"]
    # end

    return [status_code, header, body]
  end
end

# class HelloWorldApp
#   def self.call(env)
#     response = Rack::Response.new
#     response.write 'Hello World' # write some content to the body
#     response.body = ['Hello World'] # or set it directly
#     response['X-Custom-Header'] = 'foo'
#     response.set_cookie 'bar', 'baz'
#     response.status = 202

#     response.finish # return the generated triplet
#   end
# end