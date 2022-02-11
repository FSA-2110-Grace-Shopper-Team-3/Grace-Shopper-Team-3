import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProd } from '../store';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      price: '',
      img: '',
      description: '',
      quantity: 1,
      category: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      await this.props.createProduct({ ...this.state });
    } catch (er) {
      this.setState({ error: er.response.data });
    }
  }

  render() {
    const { brand, model, price, img, description, quantity, category, error } =
      this.state;
    const { handleSubmit, handleChange } = this;
    const { products } = this.props;

    const allCategories = [
      ...new Set(
        products
          .map((product) => product.category)
          .filter((product) => !!product)
      ),
    ];

    return (
      <div>
        {!!error && <pre>{JSON.stringify(error, null, 2)}</pre>}
        <h4>Add Product</h4>
        <form id="add-product" onSubmit={handleSubmit}>
          <input
            name="brand"
            onChange={handleChange}
            value={brand}
            placeholder="Brand"
          />
          <input
            name="model"
            onChange={handleChange}
            value={model}
            placeholder="Model"
          />
          <input
            name="price"
            onChange={handleChange}
            value={price}
            placeholder="Price"
          />
          <input
            name="img"
            onChange={handleChange}
            value={img}
            placeholder="Image"
          />
          <input
            name="description"
            onChange={handleChange}
            value={description}
            placeholder="Description"
          />
          <input
            name="quantity"
            onChange={handleChange}
            value={quantity}
            placeholder="Quantity"
          />
          <select
            name="category"
            value={category || ''}
            onChange={handleChange}
          >
            <option value="">SELECT A CATEGORY</option>
            {allCategories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => {
      dispatch(createProd(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
