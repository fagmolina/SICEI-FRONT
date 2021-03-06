import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { ComponentsService } from 'src/app/services/components.service';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] = [];
  panels: MatExpansionPanel[] = [];
  constructor(private componentService: ComponentsService) {}

  ngOnInit() {
    this.items = this.componentService.menuItems.value;
  }

  getPanel(panel) {
    if (panel !== undefined) {
      this.panels.push(panel);
    }
  }

  closePanels(openPanel) {
    this.panels.forEach(panel => {
      if (panel.id !== openPanel) {
        panel.close();
      }
    });
  }

  closeDrawer() {
    this.componentService.toggleMainMenu.next(false);
  }
}
