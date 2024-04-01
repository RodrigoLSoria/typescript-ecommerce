import { useRouteError } from "react-router-dom"


export default function ErrorElement() {
    const error = useRouteError()
    return (
        <div>
            <h4 className="font-bold text-4xl">there was an error...</h4>
        </div>
    )
}