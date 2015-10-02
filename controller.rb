require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base

  set :views, proc { File.join(root, 'views') }

  get '/' do
    redirect ('temperature')
  end

  get '/temperature' do
    erb :temperature
  end

  get '/example.json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
  end

  get '/temperature.json' do
    content_type :json
  'hello world'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
