class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:update]
  def index
  	@users = User.all
  	respond_to do |format|
  		format.html
  		format.json{render json: @users, status: 200}
  	end
  end

  def show
  	@user = User.find(params[:id])

  	respond_to do |format|
  		format.html
  		format.json{render json: @user}
  	end
  end

  def image
    
  end
end
