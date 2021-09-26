import React from "react";
import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

export default function HeaderContainer ({children}) {
    return (
        <Header bg={true}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sing In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}