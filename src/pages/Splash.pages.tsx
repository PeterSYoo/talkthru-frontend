export const SplashPage = () => {
    return (
        <>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <h1>Splash Page</h1>
                <a href="/login"><button>Login</button></a>
                <p>or</p>
                <a href="/signup"><button>Sign Up</button></a>
            </div>
        </>
    )
}