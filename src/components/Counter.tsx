import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counter/action";

export default function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div>
            Counter-{count}
            <div className="flex gap-4">
                <button type="button" onClick={handleIncrement}>Increment</button>
                <button type="button" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}
