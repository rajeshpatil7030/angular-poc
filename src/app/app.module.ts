import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponentComponent } from './components/users/users-component/users-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WellKnownListComponent } from './components/well-known/well-known-list/well-known-list.component';
import { WellComponent } from './components/well-known/well/well.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { TextBoxComponent } from './components/drag-drop/inputcomponents/text-box/text-box.component';
import { ButtonComponent } from './components/drag-drop/inputcomponents/button/button.component';
import { TableComponent } from './components/drag-drop/inputcomponents/table/table.component';
import { TimeComponent } from './components/drag-drop/inputcomponents/time/time.component';
import { DropdownComponent } from './components/drag-drop/inputcomponents/dropdown/dropdown.component';
import { SpinnerComponent } from './components/drag-drop/inputcomponents/spinner/spinner.component';
import { DividerComponent } from './components/drag-drop/inputcomponents/divider/divider.component';
import { MaskComponent } from './components/drag-drop/inputcomponents/mask/mask.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderControlComponent } from './components/drag-drop/inputcomponents/header-control/header-control.component';
import { FooterControlComponent } from './components/drag-drop/inputcomponents/footer-control/footer-control.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponentComponent,
    HeaderComponent,
    FooterComponent,
    WellKnownListComponent,
    WellComponent,
    DragDropComponent,
    TextBoxComponent,
    ButtonComponent,
    TableComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    DividerComponent,
    MaskComponent,
    HeaderControlComponent,
    FooterControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
