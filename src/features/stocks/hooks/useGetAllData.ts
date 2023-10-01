import {useQuery} from 'react-query';
import {backend} from "../../../api";

export const useGetAllData = () => {

    const {data, isLoading} = useQuery(
        ['DATA_TEST'],
        () => backend.rolls.getAllData()
    );

    return {data, isLoading};
}