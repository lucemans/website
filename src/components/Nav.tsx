import styled from "styled-components";
import { Container } from "./Container";
import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import MenuIcon from "@mui/icons-material/Menu";
import { themeCtx } from "../pages/_app";

const NavItemsList = [
    {
        name: "About",
        to: "/#about",
    },
    // {
    //     name: "Projects",
    //     to: "/#projects",
    // },
    {
        name: "Blog",
        to: "/blog",
    },
];

const breakpoint = "930px";

const NavContainer = styled(Container)`
    flex-grow: 0;
`;

const Holder = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: ${({ theme }) => theme.palette.primary[800]};
    height: 60px;
    display: flex;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`;

const NavItems = styled(Wrapper)`
    @media (max-width: ${breakpoint}) {
        display: none;
    }
`;

const NavItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    &:hover {
        color: ${({ theme }) => theme.palette.secondary.default};
    }
    font-size: 1.1rem;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`;

const HomeImage = styled.img`
    height: 40px;
    font-size: 1.3rem;
    border-radius: 10%;
    cursor: pointer;
`;

const MenuIconWrapper = styled.div`
    margin-top: 5px;
    cursor: pointer;
    @media (min-width: ${breakpoint}) {
        display: none;
    }
`;

const Dropdown = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    top: 60px;
    position: fixed;
    height: 10rem;
    padding: 1rem;
    width: 100%;
    left: 0;
    z-index: 100;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
    display: flex;
    flex-direction: column;
    @media (min-width: ${breakpoint}) {
        display: none;
    }
`;

const ThemeSwitcher = styled.div`
    position: absolute;
    right: 0;
    margin-top: 0.5rem;
    margin-right: 2rem;
    cursor: pointer;
    @media (max-width: ${breakpoint}) {
        display: none;
    }
    &:hover {
        color: ${({ theme }) => theme.palette.secondary.default};
    }
`;

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);
    const [theme, setTheme] = useContext(themeCtx);

    const setThemeEverywhere = () => {
        const cTheme = theme == "light" ? "dark" : "light";
        setTheme(cTheme);
        localStorage.setItem("theme", cTheme);
    };

    return (
        <Holder>
            <NavContainer>
                <Wrapper>
                    <HomeImage
                        src="/img/robot.png"
                        height="1px"
                        onClick={() => {
                            window.scrollTo(0, 0);
                            Router.push("/");
                        }}
                    />
                    <Wrapper>
                        <NavItems>
                            <NavItem
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    Router.push("/");
                                }}
                            >
                                Home
                            </NavItem>

                            {NavItemsList.map((item, index) => {
                                return (
                                    <Link href={item.to} key={index} passHref>
                                        <NavItem>{item.name}</NavItem>
                                    </Link>
                                );
                            })}
                        </NavItems>

                        <MenuIconWrapper>
                            <MenuIcon
                                onClick={() => {
                                    setDropdown(!dropdown);
                                }}
                                width="1px"
                            />
                        </MenuIconWrapper>

                        {dropdown && (
                            <Dropdown>
                                <NavItem
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        Router.push("/");
                                    }}
                                >
                                    Home
                                </NavItem>

                                {NavItemsList.map((item, index) => {
                                    return (
                                        <Link
                                            href={item.to}
                                            key={index}
                                            passHref
                                        >
                                            <NavItem>{item.name}</NavItem>
                                        </Link>
                                    );
                                })}

                                <NavItem
                                    onClick={() => {
                                        setThemeEverywhere();
                                    }}
                                >
                                    {theme == "dark" && (
                                        <LightModeIcon width="1px" />
                                    )}

                                    {theme == "light" && (
                                        <DarkModeIcon width="1px" />
                                    )}
                                    <div
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Change theme
                                    </div>
                                </NavItem>
                            </Dropdown>
                        )}
                    </Wrapper>
                </Wrapper>
            </NavContainer>
            <ThemeSwitcher
                onClick={() => {
                    setThemeEverywhere();
                }}
            >
                {theme == "dark" && <LightModeIcon width="1px" />}

                {theme == "light" && <DarkModeIcon width="1px" />}
            </ThemeSwitcher>
        </Holder>
    );
};

export default Nav;
