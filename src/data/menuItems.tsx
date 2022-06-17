/* eslint-disable prettier/prettier */

import { MenuItem } from '../interfaces/AppInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screens',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screens',
    },
    {
        name: 'Animation 103',
        icon: 'airplane-outline',
        component: 'Animation103Screens',
    },
    {
        name: 'Switchs',
        icon: 'toggle-outline',
        component: 'SwitchScreens',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreens',
    },
    {
        name: 'Text Inputs',
        icon: 'document-text-outline',
        component: 'TextInputScreens',
    },
    {
        name: 'Pull to Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreens',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionListScreen',
    },
    {
        name: 'Modal Screen',
        icon: 'copy-outline',
        component: 'ModalScreens',
    },
    {
        name: 'Infinity Screen',
        icon: 'infinite-outline',
        component: 'InfinityScrollSceens',
    },
    {
        name: 'Slides Screen',
        icon: 'flower-outline',
        component: 'SlidesScreens',
    },
    {
        name: 'Theme Global',
        icon: 'contrast-outline',
        component: 'ChangeThemeScreen',
    },
];
