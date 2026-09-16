import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RfqForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  component: string;
  material: string;
  weight: string;
  quantity: string;
  message: string;
}

@Component({
  selector: 'app-rfq',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rfq.html',
  styleUrl: './rfq.scss'
})
export class Rfq {

  selectedFile: File | null = null;
  submitted = false;

  form: RfqForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    component: '',
    material: '',
    weight: '',
    quantity: '',
    message: ''
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  removeFile(): void {
    this.selectedFile = null;
  }

  submitRfq(): void {
    if (
      !this.form.name.trim() ||
      !this.form.email.trim() ||
      !this.form.component.trim()
    ) {
      return;
    }

    console.log('RFQ:', this.form);
    console.log('Drawing:', this.selectedFile);

    this.submitted = true;
  }

}