import React from "react";

const CardDetails=(props)=>{
    return (
        <div class="ui card">
  
            <div class="content">
              {props.children}  
            </div>
            <div class="extra content">
            <button class="ui button">
                    Button
                    </button>
                    <div class="ui button" tabindex="0">
                    Focusable
                    </div>
            </div>
</div>
    )
}

export default CardDetails;