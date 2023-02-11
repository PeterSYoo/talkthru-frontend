export const SignUpPage = () => {
    return (
        <>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <h1>Sign Up Page</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <a href="/waitingroom"><button>Create Account</button></a>
                <p>Already have an account? Sign in <a href="/login">here</a></p>
            </div>
        </>
    )
}