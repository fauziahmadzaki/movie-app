import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <div className="bg-neutral-900 min-h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl font-bold text-white">404!</h1>
            <p className="text-2xl font-semibold text-white">{'Page Not Found :('}</p>
            <Link to={'/'} className="text-white text-lg underline">Back To Home</Link>
        </div>
    )
}