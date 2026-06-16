export type Filter = {
    status: string;
    colors: string[]
}

const initialState: Filter = {
    status: 'All',
    colors: []
}

export default initialState;