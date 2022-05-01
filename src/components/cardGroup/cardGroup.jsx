import React from 'react';
import '../cardGroup/cardGroup.css';
import Card from '../cardGroup/card';

class CardGroup extends React.Component{
    constructor(){
        super();
        this.state={
            languages:[
                {
                    id:1,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://unixcop.com/wp-content/uploads/2021/03/React.jpg',
                    name:'React.js'
                },
                {
                    id:2,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://camo.githubusercontent.com/91d7328cd0c09714a78f28a850218ce4e51532d562786e7b09e797f068affe61/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a7562314467756841746b434c766855477556477236772e706e67',
                    name:'React-Native'
                },
                {
                    id:3,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://yazilimamelesi.files.wordpress.com/2013/03/java_logo.jpg',
                    name:'Java'
                },
                {
                    id:4,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://avepdf.com/images/51-rating-avepdf-svg-html-to-pdf.png',
                    name:'Html'
                },
                {
                    id:5,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://d3rs4yn018y0eg.cloudfront.net/tutorial/images/1479153565.jpg',
                    name:'Css'
                },
                {
                    id:6,
                    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure praesentium nobis repellendus, fugiat dolores facilis error molestiae ',
                    imgURL:'https://www.alastyr.com/blog/wp-content/uploads/2021/04/Javascript-framework-nedir.jpg',
                    name:'JavaScript'
                }
            ]
        }
    }
    deleteCard=(card)=>{
        const newCardList = this.state.languages.filter(
            c=>c.id !== card.id
        )
        this.setState({
            languages:newCardList
        })
    }
    render(){
        return(
            <div className="cardGroup">
                <div className="header">
                    <p className="headerTitle">Programing Languages</p>
                    <div>I know theese programing languages and use in my projects. 
                    But it is not enough for me because tecnology always developing and we must learn all time new things</div>
                </div>
                <div className='footer'>
                    <Card deleteCardProp={this.deleteCard} language={this.state.languages}/>
                </div>
            </div>
        )
    }
}
export default CardGroup;