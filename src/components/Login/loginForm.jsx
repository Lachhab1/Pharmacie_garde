import { Link } from "react-router-dom";
import { UseStateContext } from "../../context/ContextProvider";
import { useState } from "react";
import Image from "../../images/images.jpeg"
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
        if (errors && errors.length == 0) {
            setErrors([]);
            setEmail("");
            setPassword("");
        }
    }
    return (
        <>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto mx-auto"
                                src="/src/assets/icons8-pharmacie-icon-3.png"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form className="space-y-6" action="#" method="#" onSubmit={(e) => handleLogin(e)}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                onChange={(e) => handleChangEmail(e)}
                                                value={email}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                onChange={(e) => handleChangPassword(e)}
                                                value={password}
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block relative w-0 flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={Image}
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
