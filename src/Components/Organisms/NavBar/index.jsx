import React from "react";
import { SearchBar, Logo, SignInProfile } from "../../Molecules";

export const NavBar = (props) => {
    return (
        <div className="
        flex
        w-[100%]
        justify-between
        pt-[30px]
        pl-[20px]
        pr-[100px]
        ">
            <div>
                <Logo />
                {props.children}
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <SignInProfile />
            </div>

        </div>
    );
};
