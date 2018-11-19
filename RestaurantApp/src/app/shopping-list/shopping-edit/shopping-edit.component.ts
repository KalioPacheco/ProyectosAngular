import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;
  private subscription: Subscription;
  private editedItem: Ingredient;
  @ViewChild('f')slForm: NgForm;
  editMode = false;
  indexEditedItem: number;
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientsService.startedEditing.subscribe(
      (index: number)=>{
        this.indexEditedItem = index;
        this.editedItem = this.ingredientsService.getIngredient(index);
        this.slForm.setValue({name: this.editedItem.name, amaunt: this.editedItem.amount})
        this.editMode = true;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
    //const name = this.nameInputRef.nativeElement.value;
    //const amount = this.amountInputRef.nativeElement.value;
    if(this.editMode){
      this.ingredientsService.updateIngredient(this.indexEditedItem, new Ingredient(form.value.name, form.value.amaunt));
    } else {
      this.ingredientsService.addIngredient(new Ingredient(form.value.name, form.value.amaunt));
    }
    this.clear()
  }

  DropItem(){
    this.ingredientsService.dropIngredient(this.indexEditedItem);
    this.clear()
  }

  clear(){
    this.slForm.reset();
    this.editMode = false;
  }

} 