import React from 'react';
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

export default class App extends React.Component {
  state = {
    shoppingItems: [
      /*stub items for testing*/
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false},
    ]
  };

  handleAddItem = (item) => {
    const newItems = [
      this.state.shoppingItems,
      { name: item, checked: false}
    ]
    this.setState({
      shoppingItems: newItems
    })
  }
  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckedItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item){
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  render(){
    return (
      // the <></> is called a 'Fragment' used to avoid an unnecessary <div>
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              /* add the two callback props here */
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckedItem}
            />
          </section>
        </main>
      </>
    )
  }
}