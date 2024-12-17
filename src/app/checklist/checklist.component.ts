import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-checklist',
  standalone: true,  // Ange att det är en standalone-komponent
  imports: [CommonModule],  // Lägg till CommonModule här
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  ngOnInit(): void {
    // Läs från localStorage när komponenten laddas och återställ checkbox-status
    this.isChecked1 = this.getCheckboxStatus('checkbox1');
    this.isChecked2 = this.getCheckboxStatus('checkbox2');
    this.isChecked3 = this.getCheckboxStatus('checkbox3');
  }

  onCheckboxChange(event: Event, checkboxId: string): void {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    // Spara varje checkbox-status i localStorage med unika nycklar
    localStorage.setItem(checkboxId, JSON.stringify(isChecked));
  }

  getCheckboxStatus(checkboxId: string): boolean {
    const savedStatus = localStorage.getItem(checkboxId);
    return savedStatus ? JSON.parse(savedStatus) : false;
  }

 
  // För att hålla reda på de egna punkterna
  egnaPunkter: string[] = [];

  // Referens till inputfältet via ViewChild
  @ViewChild('egenInput') egenInput: any;

  // Funktion för att lägga till en punkt i listan
  laggTillLista(egenInputValue: string): void {
    if (egenInputValue.trim().length > 0) {
      this.egnaPunkter.push(egenInputValue); // Lägg till punkten i arrayen
      // Visa .egenOutput om listan inte är tom
      const egenOutput = document.getElementById("egenOutput");
      if (egenOutput) {
        egenOutput.style.display = 'block';
      }

      // Töm inputfältet efter att punkten lagts till
      if (this.egenInput) {
        this.egenInput.nativeElement.value = ''; // Töm inputfältet
      }
    }
  }
}