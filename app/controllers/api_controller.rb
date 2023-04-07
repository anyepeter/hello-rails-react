class ApiController < ApplicationController
  def greetings
    @messages = Message.order('RANDOM()').first
    render json: { greeting: @messages.message}
  end
end
