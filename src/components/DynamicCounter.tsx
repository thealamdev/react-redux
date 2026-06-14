import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/dynamicCounter/action";

export default function DynamicCounter() {
    const count = useSelector((state: any) => state.dynamicCounter.value);
    const dispatch = useDispatch();

    const handleIncrement = (value: number) => {
        dispatch(increment(value));
    }

    const handleDecrement = (value: number) => {
        dispatch(decrement(value));
    }
    return (
        <div>
            Counter-{count}
            <div className="flex gap-4">
                <button type="button" onClick={() => handleIncrement(5)}>Increment</button>
                <button type="button" onClick={() => handleDecrement(3)}>Decrement</button>
            </div>
        </div>
    )
}
