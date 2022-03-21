import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { Header, Base, Toppings, Order, Home, Model } from './components';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  const [showModel, setShowModel] = useState(false)
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Model showModel={showModel} setShowModel={setShowModel} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModel(false)} >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModel={setShowModel} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;