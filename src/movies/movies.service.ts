import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Param } from '@nestjs/common';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

    async findAllMovies(): Promise<Movie[]> {
        return await this.movieModel.find();
    }

    async findOneMovie(@Param('id') id: string): Promise<Movie> {
        return await this.movieModel.findById(id);
    }

    async addOneMovie(createMovieDto : CreateMovieDto): Promise<Movie> {
        const createdMovie = new this.movieModel(createMovieDto);
        return await createdMovie.save();
    }

    async editOneMovie(@Param('id') id: string, createMovieDto: CreateMovieDto): Promise<Movie> {
        return await this.movieModel.findByIdAndUpdate(id, createMovieDto);
    }

    async removeOneMovie(@Param('id') id: string): Promise<Movie> {
        return await this.movieModel.findByIdAndRemove(id);
    }

}
