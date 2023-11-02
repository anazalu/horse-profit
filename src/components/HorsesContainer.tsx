import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { Horse, Order } from './HorseCard';
import HorseCard from './HorseCard';

interface HorsesContainerProps {
    raceId: string;
}


function HorsesContainer({ raceId }: HorsesContainerProps) {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery<Horse[]>(['horses' + raceId], () => axios.get(`http://localhost:5000/api/horses/${raceId}`).then((response) => response.data));

    const betMutation = useMutation((order: Order) => {
        return axios.post(`http://localhost:5000/api/horses/bet`, order)
            .then((response) => {
                console.log(response)
                queryClient.invalidateQueries(['horses' + order.raceId])
            })
    });

    // // Select horses for MultiBet
    // const checkHorse = (horse: Horse | undefined) => {
    //     if (horse) {
    //         checkHorseMutation.mutate({
    //             horseId: horse.horseId, raceId: horse.raceId, odds: horse.odds, horseName: horse.horseName,
    //             stake: horse.stake, step: horse.step, profit: horse.profit, isMultiBet: !horse.isMultiBet
    //         });
    //     }
    // }

    const backBet = (order: Order | undefined) => {
        if (order) {
            betMutation.mutate(order)
            console.log('Back');
        }
    }

    const layBet = (order: Order | undefined) => {
        if (order) {
            betMutation.mutate(order)
            console.log('Lay');
        }
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
                <HorseCard key={horse.horseId} horse={horse} onBack={backBet} onLay={layBet} />
            ))}
        </div>
    )
}


export default HorsesContainer;
