import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from '@material-ui/icons';
function Widgets() {
    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Hello Vasavi....</h2>
                <InfoIcon/>
            </div>
            {newsArticle("this is a protocal","now reading-9999")}
            {newsArticle("MR.robot","now reading-5555")}
            {newsArticle("Big bang theory","now reading-777")}
            {newsArticle("Brooklynn-99","now reading-9999")}
            {newsArticle("Game of thrones","now reading-888")}
        </div>
    )
}

export default Widgets;
 