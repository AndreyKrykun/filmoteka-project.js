import {createMovieCard} from './createMovieCard';
import { fetchQueryMovies } from './fetchQueryMovies';
import {refs} from './refs';
import Spinner from './spinner';
import { searchMovieTrim} from './app';
import { setObserverOff } from './infinityScroll';

export let fetchOptions = {
    currentPage: 1,
    currentQueryPage: 1,
};

export const resetQueryPage = () => {
    fetchOptions.currentQueryPage = 1;
}

const spinner = new Spinner({
    loader: '.loader',
    hidden: true,
})

export function onLoadMoreQuery() {
    setObserverOff();
    fetchQueryMovies(searchMovieTrim).then(movies => {
        
        try {
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
                
        } catch (error) {
            console.log(error);
        }
    });
}