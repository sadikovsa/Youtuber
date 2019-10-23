import React from 'react';

import './Sidebar.scss';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';

const sidebar = ( props ) => {
    const classes = ['sidebarMenu', props.sidebarToggle ? 'rollUp' : ''];
    return (
        <aside className={classes.join(' ')}>
            <Menu>
                <MenuItem menuItemId='yt_main' menuItemActive={true}>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
                        </svg>
                        <span id="main">Главная</span>
                    </a>
                </MenuItem>
                <MenuItem menuItemId='yt_trend'>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"/>
                        </svg>
                        <span id="in_trend">В тренде</span>
                    </a>
                </MenuItem>
                <MenuItem menuItemId='yt_subscriptions'>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"/>
                        </svg>
                        <span id="subscriptions">Подписки</span>
                    </a>
                </MenuItem>
                <MenuItem menuItemId='yt_like'>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"
                                className="style-scope yt-icon"></path>
                        </svg>
                        <span id="like">Понравившиеся</span>
                    </a>
                </MenuItem>
            </Menu>
        </aside>
    )
};
export default sidebar;