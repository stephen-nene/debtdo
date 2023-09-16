class DayTasksController < ApplicationController
  before_action :set_day_task, only: %i[ show update destroy ]

  # GET /day_tasks
  def index
    @day_tasks = DayTask.all

    render json: @day_tasks
  end

  # GET /day_tasks/1
  def show
    render json: @day_task
  end

  # POST /day_tasks
  def create
    @day_task = DayTask.new(day_task_params)

    if @day_task.save
      render json: @day_task, status: :created, location: @day_task
    else
      render json: @day_task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /day_tasks/1
  def update
    if @day_task.update(day_task_params)
      render json: @day_task
    else
      render json: @day_task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /day_tasks/1
  def destroy
    @day_task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_day_task
      @day_task = DayTask.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def day_task_params
      params.require(:day_task).permit(
        :user_id, 
        :created_at,
        :priorities,
        # brain_dumps_attributes: [:daytask_id, :content],
        # time_frames_attributes: [:daytask_id, :task, :description, :start, :end]
        )
    end
end
