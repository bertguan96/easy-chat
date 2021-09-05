import React from "react";
import { Sidebar } from "./sidebar/sidebar";


export class PCView extends React.Component {

    public render() {
        return (
            <div
                style={{
                    height: '100%'
                }}>
                <Sidebar />
            </div>
        );
    }
}