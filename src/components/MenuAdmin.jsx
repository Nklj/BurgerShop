import React, { Component } from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import firebase from "firebase/app";

class MenuAdmin extends Component {
  state = {
    photo: "",
    user: "xxx",
  };

  render() {
    const { user, photo } = this.state;
    const avatar = photo
      ? photo
      : `https://nklj.github.io/BurgerShop/images/avatar.png`;
    return (
      <div className="menu-admin">
        {user ? (
          <div className="login-header">
            <div className="avatar">
              <img src={avatar} alt={user} />
            </div>
            <button className="buttonLogout">Выйти</button>
          </div>
        ) : null}
        <h2>Управление Меню</h2>
        {Object.keys(this.props.burgers).map((key) => {
          return (
            <EditBurgerForm
              key={key}
              index={key}
              deleteBurger={this.props.deleteBurger}
              updateBurger={this.props.updateBurger}
              burger={this.props.burgers[key]}
            />
          );
        })}
        <AddBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSampleBurgers}>
          Загрузить бургеры
        </button>
      </div>
    );
  }
}

export default MenuAdmin;
