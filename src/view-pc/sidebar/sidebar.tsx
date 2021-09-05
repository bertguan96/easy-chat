import React from "react";
import { BarsOutlined, TeamOutlined, CommentOutlined } from '@ant-design/icons';
import './sidebar.css';


export class Sidebar extends React.Component {
    public render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <div className='sidebar-header-icon'>
                        <div className = 'sidebar-header-icon-placeholder'></div>
                    </div>
                </div>
                <div className='sidebar-container'>
                    <div className='sidebar-list'>
                        <div className='sidebar-list-item'>
                            <CommentOutlined />
                        </div>
                        <div className='sidebar-list-item'>
                            <TeamOutlined />
                        </div>
                    </div>
                </div>
                <div className='sidebar-footer fixed-buttom'>
                    <div className='sidebar-footer-icon'>
                        <BarsOutlined />
                    </div>
                </div>
            </div>
        );
    }
}