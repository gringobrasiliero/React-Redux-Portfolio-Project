class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  def fallback_index_html
   render :file => 'public/index.html'
 end

 private
     def authenticate_user
       user_token = request.headers['X-USER-TOKEN']
       if user_token
         @user = User.find_by_token(user_token)
         #Unauthorize if a user object is not returned
         if @user.nil?
           return unauthorize
         end
       else
         return unauthorize
       end
     end

     def unauthorize
       head status: :unauthorized
       return false
     end




end
