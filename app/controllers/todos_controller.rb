class TodosController < ApplicationController

  def create
    todo = Todo.create(todo_params)
    render json: todo.to_json
  end

  def destroy
    todo = Todo.destroy(params[:id])
    render json: todo.to_json
  end

  def todo_params
    params.require(:todo).permit(:task)
  end
end
