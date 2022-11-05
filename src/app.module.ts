import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'

@Module({
  imports: [MoviesModule, MongooseModule.forRoot(config.mongoURI)],
})
export class AppModule {}
