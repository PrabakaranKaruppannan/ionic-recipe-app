import { Component } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	btnText = 'Hello';
	reason: string;
	amount: number;
	expenseList: Expense[];

	constructor() {
		this.expenseList = [];
	}

	addExpense() {
		const newExpense = new Expense();
		newExpense.reason = this.reason;
		newExpense.amount = this.amount;

		this.expenseList.push(newExpense);
		this.clearExpense();
	}

	clearExpense() {
		this.reason = '';
		this.amount = null;
	}

}
