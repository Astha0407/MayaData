import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as IoPersonCircleSharp from "react-icons/io";
export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About me',
        path:'/aboutme',
        icon:<IoPersonCircleSharp.IoIosPerson />,
        cName: 'nav-text'
    },
]