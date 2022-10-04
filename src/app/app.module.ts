import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ToDoCustomStoreComponent } from './features/to-do-custom-store/to-do-custom-store.component';
import { ToDoServiceWithSubjectComponent } from './features/to-do-service-with-subject/to-do-service-with-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoCustomStoreComponent,
    ToDoServiceWithSubjectComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
