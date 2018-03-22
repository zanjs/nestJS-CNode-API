import { Page } from './../common/interfaces/page.interface';
import { Get, Controller, Param, Query } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(
    private readonly topicService: TopicService,
  ){}

  @Get('/')
  async root(@Query() query): Promise<object> {
    const req = await this.topicService.list(query);
    return req;
  }

  @Get(':id')
  async one(@Param() param): Promise<object> {
    const id = param.id;
    const req = await this.topicService.one(id);
    return  req;
  }
}