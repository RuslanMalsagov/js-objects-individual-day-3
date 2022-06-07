/*


===============ТИПО ЗАПИСЫВАЕМ РАСХОДЫ


*/
const expenses = {
  finance: 500, // финансы
  expenses: 0, // расходы
  //   monthlyExpenses: 0, // расходы за месяц
  income: 0, // доход
  //   monthlyIncome: 0, // доход за месяц

  // расходы на машину
  car: {
    spaceParts: 0,
    fuel: 0,
  },

  // расходы на дома
  home: {
    eat: 0,
    householdGoods: 0,
  },

  otherExpenses: 0, // прочие расходы

  // показывает оставшиеся средства и расходы
  getFinance: function (text = "финансы") {
    if (this.finance > 0) {
      console.log(`Вы потратили: ${this.expenses}₽`);
      console.log(`У вас осталось: ${this.finance}₽`); // если больше нуля
      return;
    } else {
      console.log(`У вас не осталось средств: ${this.finance}₽`); // если менье нуля
    }
  },

  getExpensesMonthly: function () {
    console.log(`Вы потратили за этот месяц: ${this.monthlyExpenses}₽.`); // показывает расходы за месяц
  },

  getMonthlyIncome: function () {
    console.log(`Вы заработали за этот месяц: ${this.monthlyIncome}₽.`); // показывает заработок за месяц
  },

  // метод вносит расходы
  writeExpenses: function (view, exp) {
    if (this.finance < exp) {
      console.log("У вас мало денег((");
      return;
    }

    if (view.toLowerCase() === "топливо") {
      this.car.fuel += exp;
      this.finance -= exp;
      this.expenses += exp;
      console.log(`Потрачено: ${exp}₽ на заправку. Оталось: ${this.finance}₽`);
      return;
    }

    if (view.toLowerCase() === "запчасти") {
      this.car.spaceParts += exp;
      this.finance -= exp;
      this.expenses += exp;
      console.log(`Потрачено: ${exp}₽ на запчасти. Оталось: ${this.finance}₽`);
      return;
    }

    if (view.toLowerCase() === "еда") {
      this.home.eat += exp;
      this.finance -= exp;
      this.expenses += exp;
      console.log(`Потрачено: ${exp}₽ на еду. Оталось: ${this.finance}₽`);
      return;
    }

    if (view.toLowerCase() === "хозтовары]") {
      this.home.householdGoods += exp;
      this.finance -= exp;
      this.expenses += exp;
      console.log(
        `Потрачено: ${exp}₽ на хозтовары для дома. Оталось: ${this.finance}₽`
      );
      return;
    }

    if (view.toLowerCase() === "хозтовары]") {
      this.otherExpenses += exp;
      this.finance -= exp;
      this.expenses += exp;
      console.log(
        `Потрачено: ${exp}₽ на прочие расходы. Оталось: ${this.finance}₽`
      );
      return;
    }
  },
  writeIncome: function (num) {
    this.finance += num;
    this.income += num;
    console.log(`Теперь у вас: ${this.finance}₽.`);
  },
};

// expenses.writeIncome(5000);
// expenses.writeExpenses("запчасти", 500);
// expenses.getFinance();
// expenses.getExpensesMonthly();
// expenses.writeExpenses("топливо", 501);
// expenses.writeIncome(5000)
