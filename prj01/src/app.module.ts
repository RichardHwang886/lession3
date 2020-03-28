import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { M001Module } from './m001/m001.module';

@Module({
  imports: [ M001Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
