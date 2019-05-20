import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ReceipeService } from '../receipes/receipe.service';
import { ServerService } from '../server.service';
import { AuthService } from '../auth/auth.service';


@Component({
   selector: 'app-header',
   templateUrl: './header.component.html'
})
export class HeaderComponent {
   @Output() selectReceipe = new EventEmitter<String>()
   @Output() selectShoppingList = new EventEmitter<String>()
   selectedReceipeHeader: string = 'false';
   selectedShoppingListHeader: string = 'false';
   constructor(private authService: AuthService, private receipeService: ReceipeService, private serverService: ServerService) {

   }
   onSelectReceipe() {
      if (this.selectedReceipeHeader === 'false') {
         this.selectedReceipeHeader = 'DisplayReceipe';
         this.selectReceipe.emit(this.selectedReceipeHeader)
      }
      else {
         this.selectedReceipeHeader = 'false'
         this.selectReceipe.emit(this.selectedReceipeHeader)
      }
   }
   onSelectShoppingList() {
      if (this.selectedShoppingListHeader === 'false') {
         this.selectedShoppingListHeader = 'DisplayShoppingList';
         this.selectShoppingList.emit(this.selectedShoppingListHeader)
      }
      else {
         this.selectedShoppingListHeader = 'false'
         this.selectShoppingList.emit(this.selectedShoppingListHeader)
      }
   }
   onSaveData() {
      this.serverService.saveReceipeData(this.receipeService.getReceipe())
         .subscribe((response) => {
            console.log(response.json())
         })
   }
   onFetchData() {
      this.serverService.fetchReceipeData()
   }
   onSignOut() {
      this.authService.signOut();
   }
   getAuthenticated(){
      return !this.authService.isAuthenticated()
   }
}