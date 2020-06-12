import React from 'react';

import './ItemCard.scss';

// "itemName"
// "itemImage"
// "itemDescription"
// "uid"

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3">
        <div className="card">
            <img src="..." class="card-img-top" alt="...">{item.itemImage}</img>
              <div className="card-body">
                 <h5 className="card-title">{item.ItemName}</h5>
                  <p class="card-text">{item.itemDescription}</p>
              </div>
        </div>
      </div>

    );
  }
}

export default ItemCard;
