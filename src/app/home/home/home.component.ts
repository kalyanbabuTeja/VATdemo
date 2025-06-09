import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  title ="VAT UTILITY";
  constructor(
  private router: Router) {}

ngOnInit(): void {
 // alert("Hello App");
}
  redirectToPage() {
    this.router.navigate(['/vat-utility/vat-reg-uility']);  
  }
}
