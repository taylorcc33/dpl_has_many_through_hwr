class Api::TeachersController < ApplicationController
  before_action :set_teacher, only: [:show, :teacher_appointments, :destroy]

  def index
    teachers = Teacher.all 
    render json: teachers
  end

  def show
    render json: @teacher
  end

  def teacher_appointments
    render json: {appointments: @teacher.get_appts}
  end

  def create
    @teacher = Teacher.new(teacher_params)

    if @teacher.save
      render json: @teacher
    else
      render json: {error: @teacher.errors}, status: 422
    end
  end

  def destroy
    @teacher.destroy
    render json: @uteacher
  end

  private

    def set_teacher
      @teacher = Teacher.find(params[:id])
    end

    def teacher_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
