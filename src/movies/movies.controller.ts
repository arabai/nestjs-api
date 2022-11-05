import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}
    
    @Get()
    getAllMovies(): Promise<Movie[]> {
        return this.moviesService.findAllMovies()
    }

    @Get('/:id')
    getOneMovie(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.findOneMovie(id)
    }

    @Post()
    postOneMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.moviesService.addOneMovie(createMovieDto)
    }

    @Put('/:id')
    putOneMovie(@Param('id') id: string, @Body() createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.moviesService.editOneMovie(id, createMovieDto)
    }

    @Delete('/:id')
    deleteOneMovie(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.removeOneMovie(id)
    }
}
