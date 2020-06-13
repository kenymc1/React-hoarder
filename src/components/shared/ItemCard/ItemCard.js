import React from 'react';

import itemShape from '../../../helpers/propz/itemShape';
import './ItemCard.scss';


class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3">
        <div className="card">
        <div className="card-body">
            <img className="img" width="100%" src={item.itemImage} alt="Logo" />
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ItemCard;
