import React, { useState } from "react";
import {evaluate} from "mathjs"
import "./Buttons.css"

export default function Buttons() {
    
    const [val, setDisplay] = useState("");
    
    function display(num) {
        setDisplay(val + num)
    }

    function ClearAll() {
        setDisplay("")
    }

    function Calculate() {
       setDisplay(evaluate(val)) 
    }
    function power() {
        setDisplay(evaluate(val*val))
    }
    function percentage() {
        setDisplay(evaluate(val)*100)
    }

    function del() {
        setDisplay(val.slice(0,-1))
    }
    return (
        <>
         <div className="input-group w-75 mt-3">
                <input type="text" className="form-control "
                    placeholder="Enter your input here"
                    aria-label="Username"
                    aria-describedby="addon-wrapping" value={val} />
        </div>
        <div className="Allbuttons w-75">
            
                 <div className="container fs-4">
                    <div className="row">
                        <div className="col" onClick={()=>ClearAll()}>
                        Clear
                        </div>
                        <div className="col" onClick={()=>power()}>
                         X<sup>2</sup>
                        </div>
                        <div className="col"onClick={()=>percentage()}>
                           %
                         </div>
                        <div className="col" onClick={()=>{display("/")}}>
                           /
                        </div>
                </div>
                
                <div className="row">
                        <div className="col" onClick={()=>display("7")}>
                        7
                        </div>
                        <div className="col"onClick={()=>display("8")}>
                        8
                        </div>
                        <div className="col"onClick={()=>display("9")}>
                        9
                         </div>
                        <div className="col" onClick={()=>{display("*")}}>
                        x
                        </div>
                </div>

                <div className="row">
                        <div className="col"onClick={()=>display("4")}>
                        4
                        </div>
                        <div className="col"onClick={()=>display("5")}>
                        5
                        </div>
                        <div className="col"onClick={()=>display("6")}>
                        6
                         </div>
                        <div className="col" onClick={()=>{display("-")}}>
                        -
                        </div>
                    </div>
                 
                <div className="row">
                        <div className="col" onClick={()=>display("1")}>
                        1
                        </div>
                        <div className="col" onClick={()=>display("2")}>
                        2
                        </div>
                        <div className="col" onClick={()=>display("3")}>
                        3
                         </div>
                        <div className="col" onClick={()=>{display("+")}}>
                        +
                        </div>
                    </div>
                <div className="row">
                        <div className="col" onClick={()=>display("0")}>
                        0
                        </div>
                        <div className="col"onClick={()=>{display(".")}}>
                        .
                        </div>
                        <div className="col" onClick={()=>{del()}}>
                        Del
                         </div>
                        <div className="col" onClick={()=>Calculate()}>
                        =
                        </div>
                </div>
                
                
            </div>    
            </div>
        </>
                
    );

}