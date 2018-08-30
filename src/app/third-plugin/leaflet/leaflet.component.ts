import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.less']
})
export class LeafletComponent implements OnInit {
  private mymap: L.Map;
  private baseMaps;
  private overlayerMaps;
  private baseUrl = 'www.ais.msa.gov.cn';
  standardMap = L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsea&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`);
  basicMap = L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=basicsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`);
  advancedMap = L.tileLayer(`http://${this.baseUrl}/MapService?service=wmts&request=gettile&tilematrixset=advsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0`);

  @ViewChild('popup') popup: TemplateRef<any>;

  private baseIconPath = 'assets/img/marker';

  private cities;

  constructor() {
    this.baseMaps = {
      "标准海图": this.standardMap,
      "基础海陆图": this.basicMap,
      "高级海陆图": this.advancedMap
    }
    this.cities = L.layerGroup([
      this.markerBindPopup([38.81674, 117.81144], '广州'),
      this.markerBindPopup([38.54631, 117.83161], '深圳'),
      this.markerBindPopup([38.66612, 117.84192], '北京'),
      this.markerBindPopup([38.79653, 117.89103], '上海'),
    ]);

    this.overlayerMaps = {
      "城市": this.cities
    }
  }

  ngOnInit() {

    this.mymap = L.map('mapid', {
      zoomControl: false,
      center: L.latLng(38.94686, 117.85172),
      zoom: 12,
      minZoom: 4,
      maxZoom: 16,
      attributionControl: false,
      layers: [this.standardMap, this.cities]
    });
    this.control();
    // let circle = this.addCircle();
    this.addMarker().bindPopup("<b>HI!</b><br>I am a 弹出框.").openPopup();

    this.markerBindPopup2([38.82674, 117.81144], this.popup);
    //画圆
    // circle.bindPopup("我是一个圆.");
    //弹出层
    this.createPopup();
    //处理事件
    this.mymap.on('click', (e: any) => {
      this.onMapClick(e);
    });
  }


  control() {
    L.control.zoom({ position: "topright", zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(this.mymap);
    //显示鼠标指针在地图上移动时的地理坐标
    // L.control.mousePosition({ position: "bottomright" }).addTo(mymap);
    L.control.layers(this.baseMaps, this.overlayerMaps).addTo(this.mymap);
    L.control.scale().addTo(this.mymap);
  }

  /**
   * 添加一个圆
   * @param mymap 
   */
  addCircle(): L.Circle {
    return L.circle([38.94686, 117.85172], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.mymap);
  }

  /**
   * 添加标记
   * @param latlng 经纬度
   * @param icon 自定义图标
   */
  addMarker(latlng?, icon?): L.Marker {
    return L.marker(latlng ? latlng : [38.94689, 117.85175], {
      icon: this.createCustomIcon()
    }).addTo(this.mymap);
  }

  /**
   * 标记添加弹出框
   * @param latlng 
   * @param title 标题
   */
  markerBindPopup(latlng, title: string) {
    return L.marker(latlng, {
      icon: this.createCustomIcon()
    }).bindPopup(title);
  }

  /**
   * 添加弹出框
   * @param latlng 
   * @param element 
   */
  markerBindPopup2(latlng, element: TemplateRef<any>) {
    console.log(element);
    return L.marker(latlng, {
      icon: this.createCustomIcon()
    }).addTo(this.mymap).bindPopup(element.elementRef.nativeElement).openPopup();
  }

  /**
   * 添加弹出框
   * @param latlng 经纬度
   * @param content HtmlElement | String
   */
  createPopup(latlng?, content?): L.Popup {
    return L.popup()
      .setLatLng(latlng ? latlng : [38.94699, 117.85175])
      .setContent(content ? content : "我是一个独立的弹出窗口.")
      .openOn(this.mymap);
  }
  /**
   * 点击事件
   * @param e 
   */
  onMapClick(e) {
    this.createPopup(e.latlng, "You clicked the map at " + e.latlng.toString());
  }

  /**
   * 自定义图标
   */
  createCustomIcon() {
    return L.icon({
      iconUrl: `${this.baseIconPath}/light.png`,
      // shadowUrl: 'leaf-shadow.png',
      // iconSize: [38, 95], // size of the icon
      // shadowSize: [50, 64], // size of the shadow
      iconAnchor: [8, 16], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -24] // point from which the popup should open relative to the iconAnchor
    });
  }



}
