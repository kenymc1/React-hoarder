import React from 'react';
import itemData from '../../../helpers/data/ItemData';


import './SingleItem.scss';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single items:', err));
  }


removeItem = () => {
  const { itemId } = this.props.match.params;
  itemData.deleteItem(itemId)
    .then(() => this.props.history.push('/home'))
    .catch((err) => console.error('unable to delete scat: ', err));
}

render() {
  const { item } = this.state;
  return (
      <div className='SingleStuff'>
        <button className="btn btn-danger" onClick={this.removeItem}><i className="fas fa-trash-alt"></i></button>
        <h1 className='mt-3 text-center'>Single Stuff</h1>
        <div className='row justify-content-center'>
          <div className='card col-6 mb-5'>
            <img src={item.itemImage} alt={item.itemName} className='card-img-top' />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDescription}</p>
              {/* <Link className="btn btn-warning" to={editLink}><i class="fas fa-pencil-alt"></i></Link> */}
              <button className="btn btn-dark" onClick={this.removeItem}><i className="far fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
  );
}
}
export default SingleItem;
