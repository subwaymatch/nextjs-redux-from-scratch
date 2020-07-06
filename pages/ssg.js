import DemoComponents from "../components/demo-components";

export default function SSG() {
    return (
        <>
            <h1>Static Site Generation (SSG)</h1>
            <DemoComponents />
        </>
    );
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time
export function getStaticProps() {
    // Note that in this case, we're returning the state directly, without creating
    // the store first (like in /pages/ssr.js)
    // This approach can be better and easier
    return {
        props: {
            initializeReduxState: {
                lastUpdate: Date.now(),
                light: false,
            },
        },
    };
}
