import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@Component({
  selector: 'app-main-body',
  imports: [TabsModule, Button, AvatarModule, AvatarGroupModule],
  templateUrl: './main-body.html',
  styleUrl: './main-body.css',
})
export class MainBody {
  value: number = 0;
}
