import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from "./components/header/header";
import {MatIconModule} from '@angular/material/icon';
import { TabStripe } from "./components/tab-stripe/tab-stripe";
import { MainBody } from "./components/main-body/main-body";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, MatIconModule, TabStripe, MainBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CRM-Dashboard');
}
