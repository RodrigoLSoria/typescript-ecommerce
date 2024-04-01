import { Header, Loading, NavBar } from "@/components"
import { Outlet, useNavigation } from "react-router-dom"

export default function HomeLayout() {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <>
            <Header />
            <NavBar />

            <div className="align-element py-20">
                {isPageLoading ? (
                    <Loading />
                ) :
                    (
                        <Outlet />

                    )}
            </div>

        </>
    )
}
