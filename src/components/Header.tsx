import { useDispatch, useSelector } from "react-redux"
import { increment } from "../features/counter/counterSlice";

export default function Header() {

    const dispatch = useDispatch();
    // const counter = useSelector((state:any) => state?.counter)

    return (
        <div
            className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg"
        >
            {/* {counter} */}
            Simple Todo Application with Redux
            <button onClick={() => dispatch(increment())}>++</button>
        </div>
    )
}
