import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './directives/match-password.directive';

@NgModule({
  declarations: [
  
    FormReactiveComponent,
       FormTemplateComponent,
       MainComponent,
       PageNotFoundComponent,
       MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
