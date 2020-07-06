import { useDispatch } from "react-redux";
import Nav from "./nav";
import Clock from "./clock";
import Counter from "./counter";
import useInterval from "../lib/useInterval";

export default function DemoComponents() {
    const dispatch = useDispatch();

    useInterval(() => {
        dispatch({
            type: "TICK",
            light: true,
            lastUpdate: Date.now(),
        });
    }, 1000);

    return (
        <>
            <Nav />
            <Clock />
            <Counter />
        </>
    );
}
