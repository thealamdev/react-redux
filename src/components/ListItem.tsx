import { useSelector } from 'react-redux'
import List from './List'
import type { Todo } from '../redux/todos/initialValues'

export default function ListItem() {
    const todos = useSelector((state: any) => state.todos)
    return (
        <div>
            <div
                className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >
                {todos.map((todo: Todo) => (
                    <List todo={todo} key={todo.id} />
                ))}
            </div>
            <hr className="mt-4" />
        </div>
    )
}