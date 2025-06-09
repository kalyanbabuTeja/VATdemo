import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Annexure1Component } from '../../shared/annexure1/annexure1.component';
import { Annexure2Component } from '../../shared/annexure2/annexure2.component';
import { Annexure3Component } from '../../shared/annexure3/annexure3.component';
import { Annexure5Component } from '../../shared/annexure5/annexure5.component';
import { Annexure6Component } from '../../shared/annexure6/annexure6.component';
import { CstFormAComponent } from '../../shared/cst-form-a/cst-form-a.component';
import { VatA1Component } from '../../shared/vat-a1/vat-a1.component';
import { InstructionComponent } from '../../shared/instruction/instruction.component';

@Component({
  selector: 'app-vat-reg-uility',
  standalone: true,
  imports: [FormsModule,  MatTabsModule, MatIconModule,CommonModule,Annexure1Component,
    Annexure2Component,Annexure3Component,Annexure5Component,Annexure6Component,CstFormAComponent,
    VatA1Component,InstructionComponent
  ],
  templateUrl: './vat-reg-uility.component.html',
  styleUrl: './vat-reg-uility.component.scss'
})
export class VatRegUilityComponent implements OnInit {
  title ="UTILITY";
  username = '';

  constructor(@Inject(PLATFORM_ID) 
  private platformId: Object,
  private router: Router
) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        this.username = storedUsername;
      }
    }
  }

  saveUsername(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('username', this.username);
    }
  }
 


  tabs = [
    { label: 'Instructions', icon: 'ℹ️' },
    { label: 'VAT A1', icon: '📝' },
    { label: 'Annexure I', icon: '📝' },
    { label: 'Annexure II', icon: '📝' },
    { label: 'Annexure III', icon: '📝' },
    { label: 'Annexure V', icon: '📝' },
    { label: 'Annexure VI', icon: '📝' },
    { label: 'CST Form A', icon: '📝' }
  ];
  
  activeTab = this.tabs[0];
  
  selectTab(tab: any) {
    this.activeTab = tab;
  }
  
  
}
