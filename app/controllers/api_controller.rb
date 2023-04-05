class ApiController < ApplicationController
    def greetings
      @messages = Message.order('RANDOM()').first
      render json: @messages
    end
  end