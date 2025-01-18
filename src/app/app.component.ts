import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentsTableComponent } from './investments-table/investments-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentsTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
