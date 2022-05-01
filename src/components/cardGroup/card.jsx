import React from 'react';
import '../cardGroup/card.css';
class Card extends React.Component {

    render() {
        return (
            <div className='card'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {this.props.language.map((language, key) => {
                        return (
                            <div className="col cardSize" key={language.id}>
                                <div className="cardCol h-100">
                                    <img src={language.imgURL} className="card-img-top cardImgSize" alt="s" />
                                    <div className="card-body">
                                        <h5 className="card-title cardName">{language.name}</h5>
                                        <p className="card-text cardText">{language.title}</p>
                                        <div className='cardButtons'>
                                            {<a className="btn btn-light" href={language.imgURL} target="_blank" rel="noreferrer"role="button">{language.id}</a>}
                                            <div className="d-grid gap-2 d-md-block">
                                                <button onClick={(event) => this.props.deleteCardProp(language)} className="btn btn-primary carButton" type="button">Delete</button>
                                            </div>
                                        </div>                                        </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Card;