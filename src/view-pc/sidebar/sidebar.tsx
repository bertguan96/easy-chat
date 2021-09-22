import React from "react";
import { BarsOutlined, TeamOutlined, CommentOutlined } from '@ant-design/icons';
import './sidebar.css';
import { EventKey } from "../../common/define";


export class Sidebar extends React.Component {
    private highlightKey = '';

    private onClick(key: string) {
        if (this.highlightKey !== '') {
            this.clearBackground();
        }
        this.highlightKey = key;
        this.setBackground();
        // 发送按钮变更事件
        const event = new CustomEvent(EventKey.CHANGE_TAB, { detail: this.highlightKey } );
        document.dispatchEvent(event);
    }

    private clearBackground() {
        const dom = document.getElementById(this.highlightKey);
            if (dom) {
                if (dom) {
                    dom.style.background = '';
                    this.highlightKey = '';
                }
            }
    }

    private setBackground() {
        const dom = document.getElementById(this.highlightKey);
        if (dom) {
            dom.style.background = 'rgba(178, 178, 178, 0.2)';
        }
    }



    private renderSidebarList() {
        const sidebarMenus = [
            {
                icon: <CommentOutlined />,
                key: 'sidebar-message',
            },
            {
                icon: <TeamOutlined />,
                key: 'sidebar-friend',
            }
        ];
        return sidebarMenus.map((menu) => {
            return (
                <div 
                        id = {menu.key}
                        className = 'sidebar-list-item'
                        onClick = {this.onClick.bind(this, menu.key)}
                    >
                    {menu.icon}
                </div> 
            );
        });
    }


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
                        {this.renderSidebarList()}
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