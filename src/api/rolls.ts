import {api} from "../pages/_app";

export async function getAllData() {

    const data = await api.get<IRoll>(`/list_pormo.json`)
    return data.data;
}

