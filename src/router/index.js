import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('@/pages/discover'))
const Mine = React.lazy(() => import('@/pages/mine'))
const Friends = React.lazy(() => import('@/pages/friends'))
const Recommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'))
const Toplist = React.lazy(() => import('@/pages/discover/c-pages/toplist'))
const Playlist = React.lazy(() => import('@/pages/discover/c-pages/playlist'))
const Djradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'))
const Artist = React.lazy(() => import('@/pages/discover/c-pages/artist'))
const Album = React.lazy(() => import('@/pages/discover/c-pages/album'))
const Song = React.lazy(() => import('@/pages/player'))

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
                path:'/discover/toplist/:id',
                component:Toplist
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
            {
                path:'/discover/song/:id',
                component:Song
            }
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/friends',
        component:Friends
    },
]

export default routes