import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}
    
    @Get()
    getAllMovies(): string {
        return this.moviesService.findAllMovies()
    }

    @Get('/:id')
    getOneMovie(@Param('id') id:number): string {
        return this.moviesService.findOneMovie(id)
    }

    @Post()
    postOneMovie(@Body() createMovieDto: CreateMovieDto): CreateMovieDto {
        return this.moviesService.addOneMovie(createMovieDto)
    }

    @Put('/:id')
    putOneMovie(@Param('id') id:number, @Body() createMovieDto: CreateMovieDto): CreateMovieDto {
        return this.moviesService.editOneMovie(id, createMovieDto)
    }

    @Delete('/:id')
    deleteOneMovie(@Param('id') id:number, @Body() createMovieDto: CreateMovieDto): CreateMovieDto {
        return this.moviesService.removeOneMovie(id, createMovieDto)
    }
}
