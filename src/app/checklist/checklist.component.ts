import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
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
}