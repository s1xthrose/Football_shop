import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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
          category: 'longsleeve',
          price: '79.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
