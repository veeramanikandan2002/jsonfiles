let groceries=	([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Eggs", quantity: 12, price: 0.10 },
        { product: "Bread", quantity: 2, price: 1.60 },
        { product: "Cheese", quantity: 1, price: 4.50 }
      ])
      let sum=0;
      for(let elem in groceries){
          sum+=groceries[elem].quantity*groceries[elem].price;
      }
      console.log(sum);