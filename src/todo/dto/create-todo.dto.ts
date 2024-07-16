import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Task name',
    description: 'The name of the task to be created',
  })
  taskname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task to be created',
  })
  description: string;

  @IsBoolean()
  @IsOptional()
  completed: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
