import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Horse } from './HorseCard';
import HorseCard from './HorseCard';

interface HorsesContainerProps {
    raceId: string;
}

function HorsesContainer({ raceId } : HorsesContainerProps) {
    const { data, isLoading, error} = useQuery<Horse[]>(['horses' + raceId], () => axios.get(`http://localhost:5000/api/horses/${raceId}`).then((Response) => Response.data));

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


export default HorsesContainer;
