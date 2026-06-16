export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    color: string;
}

export const initialValues: Todo[] = [
    {
        id: 1,
        title: 'Learn React Redux',
        completed: false,
        color: 'red'
    }
]