import React from 'react'

import {DiscoverWrapper,TopMenu} from './style'
import {dicoverMenu} from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
export default function Discover(props) {
    const {routes} = props.route
    return (
        <div>
            <DiscoverWrapper>
                <div className="top">
                    <TopMenu className="wrap-v1">
                            {
                                dicoverMenu.map((item,index) => {
                                    return(
                                        <div className="item"  key={index+item.link}>
                                            <NavLink to={item.link}>{item.title}</NavLink>
                                        </div>
                                    )
                                })
                            }
                    </TopMenu>
                </div>
                {renderRoutes(routes)}
            </DiscoverWrapper>
        </div>
    )
}
