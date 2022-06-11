class Api::TripsController < ApplicationController
  
  before_action :set_user 
  before_action :set_trip, only: [:show, :update, :destroy]

  def index
  
    render json: @user.trips
  end

  def show
  
    render json: @trip 
  end

  def create

    @trip = @user.trips.new(trip_params)
    if @trip.save
      render json: @trip
    else
      render json: { errors: @trip.errors }, status: :unprocessable_entity
    end
  end

  def update

    if @trip.update(trip_params)
      render json: @trip
    else
      render json: { errors: @trip.errors }, status: :unprocessable_entity
    end
  end

  def destroy

    @trip.destroy
    render json: { message: 'trip deleted'}
  end

  private 
    
    def trip_params 
      params.require(:trip).permit(:name, :duration)
     
    end

    def set_trip
      @trip = @user.trips.find(params[:id])
    end


    def set_user 
      @user = User.find(params[:user_id])
    end



end