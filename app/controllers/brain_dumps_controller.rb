class BrainDumpsController < ApplicationController
  before_action :set_brain_dump, only: %i[ show update destroy ]

  # GET /brain_dumps
  def index
    @brain_dumps = BrainDump.all

    render json: @brain_dumps
  end

  # GET /brain_dumps/1
  def show
    render json: @brain_dump
  end

# POST /brain_dumps
def create
  day_task_id = params[:day_task_id]
  content = params[:content]

  # Check if there are at least 3 content items
  if content.length < 4
    render json: { error: "At least 4 content items are required" }, status: :unprocessable_entity
    return
  end

  # Prepare an array of hash values for bulk insertion
  brain_dumps = content.map { |c| { day_task_id: day_task_id, content: c } }

  # Perform bulk insertion
  if BrainDump.insert_all(brain_dumps)
    render json: { message: "Brain dumps created successfully" }, status: :created
  else
    render json: { error: BrainDump.errors.full_messages }, status: :unprocessable_entity
  end
end


  # PATCH/PUT /brain_dumps/1
  def update
    if @brain_dump.update(brain_dump_params)
      render json: @brain_dump
    else
      render json: @brain_dump.errors, status: :unprocessable_entity
    end
  end

  # DELETE /brain_dumps/1
  def destroy
    @brain_dump.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_brain_dump
    @brain_dump = BrainDump.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def brain_dump_params
    params.require(:brain_dump).permit(:day_task_id, content: [])
  end
end
