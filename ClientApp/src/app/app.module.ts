import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DemoComponent } from './demo/demo.component';
import { CockpitComponent } from './demo/cockpit/cockpit.component';
import { ServerElementComponent } from './demo/server-element/server-element.component';

@NgModule({
  declarations: [AppComponent
    , HeaderComponent
    , RecipiesComponent
    , RecipeListComponent
    , RecipeDetailComponent
    , RecipeItemComponent
    , ShoppingListComponent
    , ShoppingEditComponent
    , DemoComponent
    , CockpitComponent
    , ServerElementComponent
  ],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
