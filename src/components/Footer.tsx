import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";
import type { Todo } from "../redux/todos/initialValues";

const leftTaskResolver = (no_of_todos: number) => {
    switch (no_of_todos) {
        case 0:
            return 'no task left'

        case 1:
            return '1 task left'

        default:
            return `${no_of_todos} tasks left`;
    }
}

export default function Footer() {
    const filter = useSelector((state: any) => state.filters);
    const todos = useSelector((state: any) => state.todos);

    const leftTask = todos.filter((item: Todo) => !item.completed).length;
    const dispatch = useDispatch();

    const handleStatusChanged = (status: string) => {
        dispatch(statusChanged(status))
    }

    const handleColorChanged = (color: string) => {
        dispatch(colorChanged(color))
    }


    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{leftTaskResolver(leftTask)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => handleStatusChanged('All')} className={`cursor-pointer ${filter.status === 'All' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => handleStatusChanged('Incomplete')} className={`cursor-pointer ${filter.status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => handleStatusChanged('Complete')} className={`cursor-pointer ${filter.status === 'Complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={() => handleColorChanged('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filter.colors.includes('green') && 'bg-green-500'}`}
                ></li>
                <li
                    onClick={() => handleColorChanged('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filter.colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li
                    onClick={() => handleColorChanged('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filter.colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}
