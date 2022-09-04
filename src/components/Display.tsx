import React, { ReactNode } from "react";

type displayText = {
    children: ReactNode;
}
export default function Display(props: displayText){
    return (<div className="content-Display">
          <span>{props.children}</span>
        </div>)
}