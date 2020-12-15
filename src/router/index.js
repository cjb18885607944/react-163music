import React from 'react'
import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'
import { Redirect } from 'react-router-dom'
import Recommend from '@/pages/discover/c-pages/recommend'
import Toplist from '@/pages/discover/c-pages/toplist'
import Playlist from '@/pages/discover/c-pages/playlist'
import Djradio from '@/pages/discover/c-pages/djradio'
import Artist from '@/pages/discover/c-pages/artist'
import Album from '@/pages/discover/c-pages/album'

const routes = [
    {
        path:'/',
        exact:true,
        render:() => (
            <Redirect to="/discover"/>
        )
    },
    {
        path:'/discover',
        component:Discover,
        routes:[
            {
                path:'/discover',
                exact:true,
                render:() => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path:'/discover/recommend',
                component:Recommend
            },
            {
                path:'/discover/toplist',
                component:Toplist
            },
            {
                path:'/discover/playlist',
                component:Playlist
            },
            {
                path:'/discover/djradio',
                component:Djradio
            },
            {
                path:'/discover/artist',
                component:Artist
            },
            {
                path:'/discover/album',
                component:Album
            },
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/friends',
        component:Friends
    }
]

export default routes