import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "watch",
                element: <WatchPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <RouterProvider router={appRouter}>
                    <Body />
                </RouterProvider>
            </div>
        </Provider>
    );
}

export default App;
