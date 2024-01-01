import { Link } from "react-router-dom";
import { UseStateContext } from "../../context/ContextProvider";
import { useState } from "react";
export default function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, errors, setErrors } = UseStateContext();
    const handleChangEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        // setErrors([]);
        login({ email, password });
        console.log(errors);
        if (errors.length = 0) {
            setErrors([]);
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div className="shadow-lg">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="/src/assets/icons8-pharmacie-icon-3.png"
                        alt="Your Company"
                    />
                    <h4 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h4>
                    {/* span for errors*/}
                    {errors?.length > 0 && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative font-light text-sm" role="alert">
                            <ul>
                                {errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* span for errors*/}
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="#" onSubmit={(e) => handleLogin(e)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={(e) => handleChangEmail(e)}
                                    value={email}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-primary">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) => handleChangPassword(e)}
                                    value={password}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </div>
    )
}
