import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-leafjs',
  templateUrl: './leafjs.component.html',
  styleUrls: ['./leafjs.component.less']
})
export class LeafjsComponent implements OnInit {
  private baseUrl = 'www.ais.msa.gov.cn';
  private baseMaps: any;
  map: any;
  markerList: Array<any>;
  constructor() {
    this.baseMaps = {
      //标准海图
      标准海图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsea&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
      //基础海陆图
      基础海陆图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=basicsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
      //高级海陆图
      高级海陆图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
    }
  }

  ngOnInit() {
    let mymap = L.map('mapid', {
      zoomControl: false,
      center: L.latLng(38.94686, 117.85172),
      zoom: 12,
      minZoom: 4,
      maxZoom: 16,
      attributionControl: false,
      layers: [this.baseMaps.标准海图]
    });
    L.control.zoom({ position: "topright", zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(mymap);
    L.control.layers(this.baseMaps).addTo(mymap);
  }

  init() {
    this.map = L.map("map", {
      zoomControl: false,
      center: L.latLng(38.94686, 117.85172),
      zoom: 12,
      minZoom: 4,
      maxZoom: 16,
      attributionControl: false,
      layers: [this.baseMaps.standardMap]
    });
    L.control.zoom({ position: "topright", zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(this.map);
    L.control.layers(this.baseMaps).addTo(this.map);
    // L.control.mousePosition({ position: "bottomright" }).addTo(this.map);
    L.control.scale().addTo(this.map);

    this.markerList = new Array<any>();

  }


}
