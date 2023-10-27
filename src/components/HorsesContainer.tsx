import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import horseData from '../horse-data';
import { Horse } from './HorseCard';
import HorseCard from './HorseCard';

function HorsesContainer() {
    const { data, isLoading, error} = useQuery<Horse[]>(['horses'], fetchHorses);

    if (isLoading) {
        return <div>Is loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div>
            {data?.map((horse: Horse) => (
                <HorseCard key={horse.horseId} horse={horse} />
            ))}
        </div>
    )
}

function fetchHorses() {
    // return axios.get('https://jsonplaceholder.typicode.com/posts').then((Response) => Response.data);
    return horseData;
}


export default HorsesContainer;
