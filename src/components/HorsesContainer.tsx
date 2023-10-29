import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { Horse } from './HorseCard';
import HorseCard from './HorseCard';

interface HorsesContainerProps {
    raceId: string;
}

function HorsesContainer({ raceId }: HorsesContainerProps) {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery<Horse[]>(['horses' + raceId], () => axios.get(`http://localhost:5000/api/horses/${raceId}`).then((Response) => Response.data));

    // const backBetMutation = useMutation((horse: Horse) => {
    //     return axios.put(`http://localhost:5000/api/horses/${raceId}`, { ...horse })
    //         .then((_) => queryClient.invalidateQueries(['horses']))
    // });

    // const layBetMutation = useMutation((horse: Horse) => {
    //     return axios.put(`http://localhost:5000/api/horses/${raceId}`, { ...horse })
    //         .then((_) => queryClient.invalidateQueries(['horses']))
    // });

    const checkHorseMutation = useMutation((horse: Horse) => {
        console.log('checkHorseMutation will make a PUT request: horse.isMultiBet=' + horse.isMultiBet)
        return axios.put(`http://localhost:5000/api/horses/${horse.raceId}`, { ...horse })
            .then((_) => queryClient.invalidateQueries(['horses' + horse.raceId]))
    });

    // // Back bet
    // const backBet = (id: number | undefined) => {
    //     const horse: Horse 
    //     if (horse) {
    //         ...
    //     }
    // }

    // Lay bet
    // const layBet = (id: number | undefined) => {
    //     const horse: Horse 
    //     if (horse) {
    //         ...
    //     }
    // }

    // Select horses for MultiBet
    const checkHorse = (horse: Horse | undefined) => {
        if (horse) {
            checkHorseMutation.mutate({
                horseId: horse.horseId, raceId: horse.raceId, odds: horse.odds, horseName: horse.horseName,
                stake: horse.stake, step: horse.step, profit: horse.profit, isMultiBet: !horse.isMultiBet
            });
        }
    }

    const backBet = (horse: Horse | undefined) => {
        console.log('Back');
    }

    const layBet = (horse: Horse | undefined) => {
        console.log('Lay');
    }

    // const checkHorse = (id: number | undefined) => {
    //     console.log('Check');
    // }

    if (isLoading) {
        return <div>Is loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div>
            {data?.map((horse: Horse) => (
                <HorseCard key={horse.horseId} horse={horse} onBack={backBet} onLay={layBet} onCheck={checkHorse} />
            ))}
        </div>
    )
}


export default HorsesContainer;
