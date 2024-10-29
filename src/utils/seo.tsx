import { Helmet, HelmetProvider } from "react-helmet-async";

export const Seo = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="author" content="Igor Chaves" />
                <meta name="language" content="English" />
                <meta name="description" content="Simple project in React.js for the purpose of evaluating the Buzzvel selection process" />
            </Helmet>
        </HelmetProvider>
    );
};
