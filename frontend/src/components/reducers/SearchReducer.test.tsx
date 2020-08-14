import { Types } from '../actions/Types';
import searchReducer from './SearchReducer';


describe('Search Reducer', ()=> {

    describe('Have props ', ()=> {

       const jobs = [
           {'headline':'frontend utvecklare', 'city':'a', 'country':'sv'},
           {'headline':'backend utvecklare', 'city':'b', 'country':'sv'},
           {'headline':'fullstack utvecklare', 'city':'c', 'country':'sv'},
        ]

        it('Should return state if receiving types for searching job', ()=> {

        const newState = searchReducer(undefined, {
            type:Types.SEARCH,
            payload:jobs
        })


        expect(newState).toEqual(jobs);

        });

        it('Should return state if receiving types for default data for jobs', ()=> {

            const newState = searchReducer(undefined, {
                type:Types.GETDATA,
                payload:jobs
            })
    
            expect(newState).toEqual(jobs);
    
            });

    });


})