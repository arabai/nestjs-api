import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MoviesModule, MongooseModule.forRoot('mongodb+srv://arabai:8o4jI4v9lYkj9iBm@mflix-cluster.obaywlv.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
