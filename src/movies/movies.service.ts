import { Body, Injectable, Param } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {

    findAllMovies(): string {
        return "All movies returned"
    }

    findOneMovie(@Param('id') id:number): string {
        return `Movie with id: ${id} returned`
    }

    addOneMovie(@Body() createMovieDto : CreateMovieDto) : CreateMovieDto {
        return createMovieDto
    }

    editOneMovie(@Param('id') id:number, @Body() createMovieDto : CreateMovieDto) : CreateMovieDto {
        return createMovieDto
    }

    removeOneMovie(@Param('id') id:number, @Body() createMovieDto : CreateMovieDto) :  CreateMovieDto {
        return createMovieDto
    }

}
