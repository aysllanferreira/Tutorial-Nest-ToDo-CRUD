import { IsString, IsOptional, IsBoolean, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Task name',
    description: 'The name of the task to be created',
  })
  taskname: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task to be created',
  })
  description: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: false,
    description: 'The status of the task',
  })
  completed: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
