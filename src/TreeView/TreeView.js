import React, { Component } from 'react';
import data from '../data.json';

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
}

const TreeView = () => (

    <div className="wrapper">
        <div className="wrapper-title">Tree View</div>
        {Object.keys(data).map((item) => <Item key={generateKey(item)} item={item} iteminfo={data[item]} />)}
    </div>

)


const Diagnnose = () => (

    <div className="wrapper-diagnose">
        <div className="wrapper-diagnose__severity0">

        </div>
        <div className="wrapper-diagnose__severity1">

        </div>
    </div>

)


class Item extends React.Component {



    render() {
        const { item, iteminfo } = this.props
        if (typeof iteminfo !== 'object') {
            return (
                <div className="wrapper-item">
                    <div className="wrapper-item__parrent">
                        {item}
                    </div>
                    <Diagnnose />
                </div>
            )
        } else {

            return (

                <>
                    <div className="wrapper-item">
                        <div className={"wrapper-item__parrent-" + item}>
                            {item}
                        </div>
                        <Diagnnose />
                    </div>
                    <div className="wrapper-item__child">
                        {Object.keys(iteminfo).map((elem) => <Item key={generateKey(elem)} item={elem} iteminfo={iteminfo[elem]} />)}
                    </div>
                </>

            )
        }

    }
}

export default TreeView