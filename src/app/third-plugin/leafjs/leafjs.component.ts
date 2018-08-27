import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeafService } from './leaf.service';
import { Subscription } from 'rxjs';
// import * as L from 'leaflet';
declare var require: any
declare var L: any;
// import 'leaflet-mouse-position';
// import 'leaflet.label';
// require('leaflet.label')
// require('assets/leaflet/L.Control.MousePosition.js');

@Component({
  selector: 'app-leafjs',
  templateUrl: './leafjs.component.html',
  styleUrls: ['./leafjs.component.less'],
  providers: [LeafService]
})
export class LeafjsComponent implements OnInit, OnDestroy {
  private baseUrl = 'www.ais.msa.gov.cn';
  private baseMaps: any;
  public markList = new Array<any>();//航标列表
  subscriptionStatusClick_map: Subscription;
  map: any;
  markerList: Array<any> = [];
  constructor(
    private leafService: LeafService
  ) {
    this.baseMaps = {
      //标准海图
      标准海图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsea&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
      //基础海陆图
      基础海陆图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=basicsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
      //高级海陆图
      高级海陆图: L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`),
    }

    this.subscriptionStatusClick_map = this.leafService.outputTitle$.subscribe(item => {

    })
  }

  ngOnInit() {
    this.init();

  }

  /**
   * 初始海图
   */
  init() {
    let mymap = L.map('mapid', {
      zoomControl: false,
      center: L.latLng(38.94686, 117.85172),
      zoom: 12,
      minZoom: 4,
      maxZoom: 16,
      attributionControl: false,
      layers: [this.baseMaps.标准海图]
    });
    this.control(mymap);
    this.getAllLight(mymap);
  }
  /**
   * 
   * @param mymap 
   */
  control(mymap) {
    L.control.zoom({ position: "topright", zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(mymap);
    //显示鼠标指针在地图上移动时的地理坐标
    L.control.mousePosition({ position: "bottomright" }).addTo(mymap);
    L.control.layers(this.baseMaps).addTo(mymap);
    L.control.scale().addTo(mymap);
  }

  /**
   * 添加标记
   * @param latlng 
   */
  addMark(latlng: any): any {
    let myIcon = L.icon({
      iconUrl: '',
      iconAnchor: [16, 24]
    })
    return L.marker(latlng, { icon: myIcon });
  }

  /**
   * 获取所有的航标
   */
  getAllLight(mymap) {
    this.leafService.getAllMarkLights().subscribe((list: any[]) => {
      console.log(list);
      list.forEach(element => {
        this.markerList.push(
          L.marker(
            L.latLng(element.latitude, element.longitude),
            {
              icon: this.getIcon(element.isRepair),
              zIndexOffset: 152
            }
          ).bindLabel(element.deviceName)
        );
      })
      L.featureGroup(this.markerList).addTo(mymap);
    })
  }
  getIcon(isRepair): any {
    let icon = L.icon({
      iconUrl: 'assets/img/marker/light.png',
      iconAnchor: [8, 16],
      // labelAnchor: [5, -12],
      popupAnchor: [0, -24],
      className: isRepair == 0 ? "light-img" : ""
    });
    return icon;
  }
  ngOnDestroy(): void {
    this.subscriptionStatusClick_map.unsubscribe();
  }

}
