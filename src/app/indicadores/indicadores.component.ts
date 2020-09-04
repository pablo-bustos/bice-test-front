import { Component, OnInit } from '@angular/core';
import { LastService } from '../services/last.service';
import { ValuesService } from '../services/values.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {
  values: Object
  elementValues: Object

  // chart
  ready = true
  chartType = 'LineChart'
  columnNames = ['Fecha', 'default'];
  options = {
    legend: {
      position: 'bottom'
    }
  };
  width = 750;
  height = 400;

  unit = {
    "dolar": "USD",
    "pesos": "CLP",
    "euro": "EUR",
    "porcentual": "%",
    "yen": "JPY"
  };

  constructor(
    private lastService: LastService,
    private valuesService: ValuesService) { }

  ngOnInit(): void {
    this.getLastValues()
  }

  getLastValues() {
    this.lastService.callLast()
      .subscribe(response => this.values = response);
  }

  showElement(element: string, unit: string) {
    this.ready = false
    this.columnNames[1] = unit;
    console.log(this.columnNames);
    this.valuesService.callValues(element)
      .subscribe(response => {
        this.elementValues = response;
        this.ready = true;
      });
  }

}
