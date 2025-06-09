import { Component ,Type  } from '@angular/core';
import { FormArray, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { FormlyForm,FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'; 
import { CommonModule } from '@angular/common';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ApplicantDetailsComponent } from'../vat-a1/vata1-components/applicant-details/applicant-details.component';
import { BusinessDetailsComponent } from'../vat-a1/vata1-components/business-details/business-details.component';
import { BusinessAddressComponent } from'../vat-a1/vata1-components/business-address/business-address.component';
import { BusinessBankDetailsComponent } from'../vat-a1/vata1-components/business-bank-details/business-bank-details.component';
import { BusinessContactsComponent } from'../vat-a1/vata1-components/business-contacts/business-contacts.component';
import { BusinessAssetsComponent } from'../vat-a1/vata1-components/business-assets/business-assets.component';
import { CommodityDetailsComponent } from'../vat-a1/vata1-components/commodity-details/commodity-details.component';
import { EacDetailsComponent } from'../vat-a1/vata1-components/eac-details/eac-details.component';
import { LiabilityTaxDetailsComponent } from'../vat-a1/vata1-components/liability-tax-details/liability-tax-details.component';
import { PersonAuthDetailsComponent } from'../vat-a1/vata1-components/person-auth-details/person-auth-details.component';
import { LicensePermitCommencementDetailsComponent } from'../vat-a1/vata1-components/license-permit-commencement-details/license-permit-commencement-details.component';



export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}
@Component({
  selector: 'app-vat-a1',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
  ],
  templateUrl: './vat-a1.component.html',
  styleUrls: ['./vat-a1.component.scss']
})
 
export class VatA1Component {
  activedStep = 0;

  model = {};

  steps: { label: string; component: Type<any> }[] = [
    { label: 'Applicant Details', component: ApplicantDetailsComponent },
    { label: 'Business Details', component: BusinessDetailsComponent },
    { label: 'Business Address', component: BusinessAddressComponent },
    { label: 'Business Contact', component: BusinessContactsComponent },
    { label: 'Business Banks', component: BusinessBankDetailsComponent },
    { label: 'Business Assets', component: BusinessAssetsComponent },
    { label: 'Comodity Details', component: CommodityDetailsComponent },
    { label: 'EAC Details', component: EacDetailsComponent },
    { label: 'Liability Tax ', component: LiabilityTaxDetailsComponent },
    { label: 'Authorised Person', component: PersonAuthDetailsComponent },
    { label: 'License Permit', component: LicensePermitCommencementDetailsComponent },
  ];
 
  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions>{});

  prevStep(step:any) {
    this.activedStep = step - 1;
  }

  nextStep(step:any) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
    console.log(this.model);
  }
}
