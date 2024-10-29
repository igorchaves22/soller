import { Footer, Header } from "~components/molecules";
import { HomePage } from "~components/pages";
import { GlobalStylesProvider, Seo } from "~utils";

export function App() {
    return (
        <>
            <Seo />
            <GlobalStylesProvider>
                <Header />
                <HomePage />
                <Footer />
            </GlobalStylesProvider>
        </>
    );
}
