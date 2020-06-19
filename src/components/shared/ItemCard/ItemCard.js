import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';
import './ItemCard.scss';


class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
        <div className="card-body">
            <img className="img" width="100%" src={item.itemImage} alt="Logo" />
            <h5 className="card-title">{item.itemName}</h5>
            <Link className="btn btn-info" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-warning" to={editLink}><i className="fas fa-edit"></i></Link>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ItemCard;
