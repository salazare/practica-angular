import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @ViewChild('valor') valor: ElementRef;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(newValue: number) {
    console.log('Nuevo valor: ', newValue);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    console.log('Progreso: ', this.progreso);
    this.valor.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso += valor;
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
    }
    this.cambioValor.emit(this.progreso);
    this.valor.nativeElement.focus();
  }

}
