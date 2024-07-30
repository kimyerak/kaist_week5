import { IsString, IsOptional, IsArray } from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

class CommentDto {
  @ApiProperty({ description: 'ID of the user who commented' })
  userId: Types.ObjectId;

  @ApiProperty({ description: 'Content of the comment' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'Number of likes on the comment', default: 0 })
  likes: number;
}

export class UpdateReelsDto {
  @ApiProperty({
    description: 'The updated speech that the avatar will say',
    required: false,
  })
  @IsString()
  @IsOptional()
  speak?: string;

  @ApiProperty({
    description: 'URL to the updated video stored in AWS S3',
    required: false,
  })
  @IsString()
  @IsOptional()
  video?: string;

  @ApiProperty({
    description: 'The updated category determining the avatar type',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Updated list of comments with likes',
    type: [CommentDto],
    required: false,
  })
  @IsArray()
  @IsOptional()
  comments?: CommentDto[];
}
