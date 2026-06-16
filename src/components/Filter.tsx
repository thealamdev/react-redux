import notes from '../assets/images/notes.png';
import tick from '../assets/images/double-tick.png'
import plus from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { addcompleted, allclearecompleted } from '../redux/todos/actions';

export default function Filter() {
    const dispatch = useDispatch();

    const handleAllCompleted = () => {
        dispatch(addcompleted())
    }

    const clearAllCompletedTask = () => {
        dispatch(allclearecompleted())
    }

    return (
        <div>
            <div>
                <form
                    className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                >
                    <img
                        src={notes}
                        className="w-6 h-6"
                        alt="Add todo"
                    />
                    <input
                        type="text"
                        placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    />
                    <button
                        type="submit"
                        className={`appearance-none w-8 h-8 bg-no-repeat bg-contain`}
                        style={{ backgroundImage: `url(${plus})` }}
                    ></button>
                </form>

                <ul
                    className="flex justify-between my-4 text-xs text-gray-500"
                >
                    <li onClick={handleAllCompleted} className="flex space-x-1 cursor-pointer">
                        <img
                            className="w-4 h-4"
                            src={tick}
                            alt="Complete"
                        />
                        <span>Complete All Tasks</span>
                    </li>
                    <li onClick={clearAllCompletedTask} className="cursor-pointer">Clear completed</li>
                </ul>
            </div>
            <hr className="mt-4" />
        </div>
    )
}
