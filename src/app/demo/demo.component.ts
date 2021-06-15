import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  ngOnInit(): void {
  }
  title = 'project-store';
  frutas = ['🍒', '🍓', '🍇', '🍑'];
  number=2;
 

  addFruta() {
    this.frutas.push('Fruta nueva');
  }
  deleteFruta(position: number) {
    this.frutas.splice(position, 1);
  }


}
