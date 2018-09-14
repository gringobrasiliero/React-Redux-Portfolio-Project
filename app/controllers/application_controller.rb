class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  def fallback_index_html
   render :file => 'public/index.html'
 end
end
