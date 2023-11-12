import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { Horse, Bet } from './HorseCard';
import HorseCard from './HorseCard';

interface HorsesContainerProps {
    raceId: string;
    multiBetSet: Set<number>;
    onCheck: (horseId: number, isChecked: boolean) => void;
}


function HorsesContainer({ raceId, multiBetSet, onCheck }: HorsesContainerProps) {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery<Horse[]>(['horses' + raceId], () =>
        axios.get(`http://localhost:5000/api/horses/${raceId}`)
            .then((response) => response.data)
    );

    const betMutation = useMutation((bet: Bet) => {
        return axios.post(`http://localhost:5000/api/horses/bet`, bet)
            .then((response) => {
                console.log(response)
                queryClient.invalidateQueries(['horses' + bet.raceId])
            })
    });

    const backBet = (bet: Bet | undefined) => {
        if (bet) {
            betMutation.mutate(bet)
            console.log('Back');
        }
    }

    const layBet = (bet: Bet | undefined) => {
        if (bet) {
            betMutation.mutate(bet)
            console.log('Lay');
        }
    }

    const handleMultiBet = (horseId: number, isChecked: boolean) => {
        onCheck(horseId, isChecked);
    }

    if (isLoading) {
        return <div>Is loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div>
            {data?.map((horse: Horse) => (
                <HorseCard key={horse.horseId} horse={horse} multiBetSet={multiBetSet} onBack={backBet} onLay={layBet} onCheck={handleMultiBet} />
            ))}
        </div>
    )
}


export default HorsesContainer;
