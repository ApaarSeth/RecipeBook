import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { SelectReceipeComponent } from './select-receipe/select-receipe.component';
import { ReceipeResolver } from './receipes/receipes-detail/receipe-resolver.service';
import { ReceipeService } from './receipes/receipe.service';
import {HttpModule}  from '@angular/http' 
import { ServerService } from './server.service';
import { AuthService } from './auth/auth.service';
import { AuthGaurd } from './auth/auth-gaurd.service';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,   
  ],
  providers: [ShoppingService,ReceipeResolver,ReceipeService,ServerService,AuthService,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
