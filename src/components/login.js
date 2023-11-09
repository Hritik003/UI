import React from "react";
import LoginBar from "./LoginBar";


export default function Login(){
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
        <LoginBar/>
        <div className="min-h-screen flex items-center justify-center bg-slate-950 wallpaper">

            <div class="flex flex-col items-center ">
                <div class="justify-center w-full">
                    <img src="/public/Images/auction1.png" alt="" />
                </div>
                
                <span class="scroll-m-20 text-lg tracking-tight lg:text-xl text-slate-400">Welcome to</span>
                <h1 class="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl text-slate-50">BitsBidding! 
                <sup>ᵝ</sup>
                
                </h1>
                <p class="scroll-m-10 text-2xl font tracking-tight lg:text-1xl text-slate-50 ">Buying and Selling made simpler!</p>
                <a href="538194275446-d22hlljqjlabnu3atlhc211v427fqpfg.apps.googleusercontent.com" class="w-fit mt-6 bg-slate-700 text-slate-50 rounded-lg flex px-4 py-2 items-center font-bold hover:bg-slate-600 transition ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>Login with Google</a>
                {/* <GoogleLogin
                    clientID = "538194275446-d22hlljqjlabnu3atlhc211v427fqpfg.apps.googleusercontent.com"    
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    className="w-full"
                /> */}
                <a href="/about" class="w-fit mt-8 text-slate-400 text-lg hover:underline underline-offset-4">About BitsBidding</a>
            </div>
        </div>
        </>

        
    );
}

