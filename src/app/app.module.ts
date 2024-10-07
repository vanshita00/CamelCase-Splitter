import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { CamelCaseSplitPipe } from './camel-case-split.pipe';  
@NgModule({
  declarations: [
    AppComponent,
    CamelCaseSplitPipe  
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
