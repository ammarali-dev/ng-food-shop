import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @Output() ingredientCreated = new EventEmitter<{
    name: string;
    amount: string;
  }>();
  onAddIngredient(nameInput: any, amountInput: any) {
    this.ingredientCreated.emit({
      name: nameInput.value,
      amount: amountInput.value,
    });
    nameInput.value = '';
    amountInput.value = '';
  }
}
