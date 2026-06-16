import { useSelector } from 'react-redux'
import List from './List'
import type { Todo } from '../redux/todos/initialValues'

export default function ListItem() {
    const todos = useSelector((state: any) => state.todos);
    const filter = useSelector((state: any) => state.filters);

    const filterByStatus = (item: any) => {
        switch (filter.status) {
            case 'Complete':
                return item.completed
            case 'Incomplete':
                return !item.completed
            default:
                return true;
        }
    }

    const filterByColors = (item: any) => {
        const { colors } = filter;
        if (colors.length > 0) {
            return colors.includes(item?.color);
        }
        return true;
    }

    const filteredTodos = todos.filter(filterByStatus).filter(filterByColors);
    
    return (
        <div>
            <div
                className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >
                {filteredTodos?.map((todo: Todo) => (
                    <List todo={todo} key={todo.id} />
                ))}
            </div>
            <hr className="mt-4" />
        </div>
    )
}