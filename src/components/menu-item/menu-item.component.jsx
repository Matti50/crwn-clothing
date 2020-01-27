import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom"; //Higher order component. Toma un componente como parámetro y retorna 
//un componente modificado.



const MenuItem = ({title, imageUrl,size, history,linkUrl,match} ) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/> 
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem);
//Devuelve un MenuItem con acceso a los props history location y match