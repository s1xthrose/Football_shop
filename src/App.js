import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Профессиональный мяч',
          img: 'ball.jpeg',
          desc: 'One of the best professional balls used in world football.',
          category: 'balls',
          price: '59.99'
        },
        {
          id: 2,
          title: 'Бутсы',
          img: 'boots.jpeg',
          desc: 'Speed, lightness and conciseness. Stand out - easy.',
          category: 'Boots',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Гетры',
          img: 'get.jpeg',
          desc: 'The best quality of materials. Everything you need for a result.',
          category: 'gaiters',
          price: '29.99'
        },
        {
          id: 4,
          title: 'Лонгслив',
          img: 'long.jpeg',
          desc: 'Invulnerability from defeats. Play like a storm.',
          category: 'longsleeves',
          price: '79.99'
        }
      ],
      ShowFullItem: false,
      fullItem: {}

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
