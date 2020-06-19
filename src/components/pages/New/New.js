import React from 'react';
import './New.scss';

class New extends React.Component {
  state = {
    itemName: '',
  }

  itemChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.vale });
  }

  render() {
    const {
      itemName,
    } = this.state;
    return (
      <div className="new col-12">

      <h1>New</h1>
      <form className=" col-6 offset-3 text-left">

        <div class="form-group">
          <label for="exampleInputEmail1">Item Name</label>
          <input
            type="text"
            class="form-control"
            id="item-itemName"
            value={itemName}
            onChange={this.itemChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      </div>
    );
  }
}
export default New;
