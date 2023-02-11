export const LoginPage = () => {
    return (
        <>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <h1>Login Page</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <a href="/waitingroom"><button>Login</button></a>
                <p>Don't have an account? Sign up <a href="/signup">here</a></p>
            </div>
        </>
    )
}