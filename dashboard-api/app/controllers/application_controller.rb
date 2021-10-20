class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include Response
  include ExceptionHandler

  respond_to :json
end
