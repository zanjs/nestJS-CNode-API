import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TopicService } from './modules/topic/topic.service';
import { TopicController } from './modules/topic/topic.controller';

@Module({
  imports: [],
  controllers: [AppController, TopicController],
  components: [TopicService],
})
export class ApplicationModule {}
