import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyboardComponent } from './keyboard/keyboard.component';
import {MatCardModule} from '@angular/material/card';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [AppComponent, NavComponent, KeyboardComponent, TextComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
