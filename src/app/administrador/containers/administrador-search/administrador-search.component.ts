import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-administrador-search',
  templateUrl: './administrador-search.component.html',
  styleUrls: ['./administrador-search.component.css']
})
export class AdministradorSearchComponent implements OnInit {

  formSearchType = this.formBuilder.group({
    type: [''],
    value: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Working');
    console.log(this.formSearchType.value.type);
    console.log(this.formSearchType.value.value);
  }

}
