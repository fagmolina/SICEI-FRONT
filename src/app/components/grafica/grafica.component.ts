import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ChartDTO,
  DataChart,
  DataSet,
  OptionsChart,
  legend,
  titleChart,
  labels
} from "src/app/interfaces/chart.model";
import Chart from "chart.js";
import { Array } from 'core-js';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  graficas: Array<ChartDTO>;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.graficas = [];
    this.graficarInvestigacionesInstitucionales();
  }


  graficarInvestigacionesInstitucionales(){
    this.cd.detectChanges();
    this.graficas[0] = new ChartDTO();
    this.graficas[0].canvas = document.getElementById("investigacionesInstitucionalesChart");
    this.graficas[0].ctx = this.graficas[0].canvas.getContext("2d");
    this.graficas[0].type = "bar";
    this.graficas[0].data = this.generarDataSetInvestigaciones();
    this.graficas[0].options = this.generarOpciones();

    let myChart = new Chart(this.graficas[0].ctx, this.graficas[0]);
    
  }

  generarDataSetInvestigaciones(){
    let data = new DataChart();
    data.labels = this.generarLabels();
    let dataSet = new DataSet();
    dataSet.borderColor = "white";
    dataSet.borderWidth = 1;
    dataSet.lineTension = 0;
    dataSet.fill = true;
    dataSet.label = "Cantidad de Investigaciones";
    dataSet.data = this.generarDataSetsData();
    dataSet.backgroundColor = ["#0072ce"];
    data.datasets = [];
    data.datasets.push(dataSet);
    return data;
  }
  generarDataSetsData() {
    let data = [2,3,7,8,9,2,5,7,9,4,1,7];
    return data;
  }
  

  generarLabels() {
    let labels = [
      "ESTIC",
      "ESJIM",
      "ESSUM",
      "ESCAR",
      "ESCIN",
      "ECSAM",
      "ESECU",
      "ESPOL",
      "ESMEB",
      "ESPRO",
      "ESREY",
      "ESBOL"
    ];
    return labels;
  }


  generarOpciones() {
    let option = new OptionsChart();
    option.display = true;
    let labelOpt = new labels();
    let title = new titleChart();
    let legen = new legend();
    legen.display = true;
    title.display = true;
    title.text = "";
    option.responsive = true;
    labelOpt.fontColor = "white";
    option.title = title;
    legen.labels = labelOpt;
    option.legend = legen;
    option.maintainAspectRatio = false;
    option.scales = {
      xAxes: [
        {
          ticks: {
            display: true,
            beginAtZero: true,
            fontColor: "white"
          },
          scaleLabel: {
            display: true,
            labelString: ""
          },
          gridLines: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            display: true,
            beginAtZero: true,
            fontColor: "white"
          },
          scaleLabel: {
            display: true,
            labelString: ""
          },
          gridLines: {
            display: true
          }
        }
      ]
    };
    option.tooltips = {
      callbacks: {
        mode: "nearest"
      }
    };
    
    return option;
  }

}
