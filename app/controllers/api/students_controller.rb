class Api::StudentsController < ApplicationController

  def index
    students = Student.All
    render json: students
  end

  def show
    render json: @student
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      render json: @student
    else
      render json: {error: @student.error}, status: 422
    end
  end

  def destroy
    @student.destroy
    render json: @student
  end

  private

    def set_student
      @student = Student.find(params[:id])
    end

    def student_params
      params.require(:student).permit(:first_name, :last_name)
    end

end
