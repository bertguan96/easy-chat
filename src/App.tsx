import React from "react";
import 'antd/dist/antd.css';
import { CommonUtils } from "./common/common_utils";
import { MobileView } from "./view-mobile/view";
import { PCView } from "./view-pc/view";


export class App extends React.Component {
  public render() {
    return <div 
    style = {{
        height: '100%'
      }}>
      {
        CommonUtils.isPc() ? <PCView /> : <MobileView />
      }
    </div>
  }
}