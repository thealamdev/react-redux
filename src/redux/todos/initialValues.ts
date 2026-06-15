export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    color: string;
}

export const initialValues: Todo[] = [
    {
        id: 1,
        title: '',
        completed: false,
        color: 'red'
    }
]