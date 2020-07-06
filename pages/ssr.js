import DemoComponents from "../components/demo-components";
import { initializeStore } from "../store";

export default function SSR() {
    return <DemoComponents />;
}

export function getServerSideProps() {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
}
