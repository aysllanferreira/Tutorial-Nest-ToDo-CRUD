import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

  constructor(@InjectModel(ToDo.name) private todoModel: Model<ToDo>) {}

  create(createTodoDto: CreateTodoDto): Promise<ToDo> {
    const currentDate = new Date();

    createTodoDto.createdAt = currentDate;
    createTodoDto.updatedAt = currentDate;
    createTodoDto.completed = false;

    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  findAll(): Promise<ToDo[]> {
    return this.todoModel.find().exec();
  }

  findOne(id: string): Promise<ToDo> {
    const todo = this.todoModel.findById(id).exec();
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Promise<ToDo> {
    const currentDate = new Date();

    updateTodoDto.updatedAt = currentDate;

    return this.todoModel.findByIdAndUpdate(
      id,
      { $set: updateTodoDto },
      { new: true },
    );
  }

  remove(id: string): Promise<ToDo> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
