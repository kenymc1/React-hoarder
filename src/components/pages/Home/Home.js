import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/ItemData';
import ItemCard from '../../shared/ItemCard/ItemCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('could not get items', err));
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
    <ItemCard key={item.id} item={item} />
    ));
    return (
    <div className="Home">
      <h1>Home</h1>
      <div className="d-flex flex-wrap">
        {buildItemCards}
      </div>
    </div>
    );
  }
}

export default Home;
