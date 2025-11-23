import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-main-body',
  imports: [TabsModule, Button],
  templateUrl: './main-body.html',
  styleUrl: './main-body.css',
})
export class MainBody {
  value: number = 0;
}
