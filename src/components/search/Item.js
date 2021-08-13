import React from 'react'

const Item = ({ item }) => {
    return (
        <div className="list-item">
            <div className="itemName">
                <label className="cityLabel">עיר : </label>
                <div className="city">{item.city}</div>
                <label className="cityLabel">אזור : </label>
                <div className="area">{item.area}</div>
            </div>
            <div className="itemDetails">
                <label className="cityLabel">זמינות: </label>
                <div className="available">{item.available}</div>
            </div>
            <div className="itemLine">--------------------------------------------------</div>
        </div>
    )
}

export default Item
