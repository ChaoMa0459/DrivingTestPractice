import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  latitude = 42.33755500091413;
  longitude = -71.09020113945007;
  locationChosen = false;
  opacity = 0.5;
  zoom = 12;
  schools = [];

  constructor() { }

  ngOnInit() {
    this.schools = [
      {
        name: "D & D Auto School",
        lat: 42.348351648743524,
        lng: -71.0670080780983
      },
      {
        name: "Metro Driving School",
        lat: 42.35128937999073,
        lng: -71.06154441833496
      },
      {
        name: "City Auto School",
        lat: 42.33965658704607,
        lng: -71.05188846588135
      },
      {
        name: "T-Guide Auto School",
        lat: 42.331392586880476,
        lng: -71.05676472187042
      },
      {
        name: "Brookline Driving School",
        lat: 42.32971506847173,
        lng: -71.1268749833107
      },
      {
        name: "American Driving Institute",
        lat: 42.338431331216185,
        lng: -71.14246666431427
      },
      {
        name: "ADP Auto School",
        lat: 42.30586012080727,
        lng: -71.06714487075806
      },
      {
        name: "Safety Auto School Inc",
        lat: 42.301036169456026,
        lng: -71.059750020504
      },
      {
        name: "Lomba Driving School",
        lat: 42.37538469337306,
        lng: -71.03722751140594
      },
      {
        name: "Sonias Driving School",
        lat: 42.377544456795256,
        lng: -71.0320508480072
      },
      {
        name: "Parkway Driving School llc",
        lat: 42.28731016257043,
        lng: -71.15056425333023
      },
      {
        name: "A Roro Auto School",
        lat: 42.36419973129,
        lng: -71.10110154509613
      },
      {
        name: "WJO Driving School",
        lat: 42.3722846095421,
        lng: -71.088387966156
      },
      {
        name: "International Driving School",
        lat: 42.38839911515321,
        lng: -71.1030026525259
      },
      {
        name: "Friendship Auto School",
        lat: 42.390889750570125,
        lng: -71.10904633998871
      },
      {
        name: "Belmont Driving School",
        lat: 42.3764804358416,
        lng: -71.15897297859192
      },
    ];
  }

  onChoseLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  onOverSchool() {
    this.opacity = 1;
  }

  onOutSchool() {
    this.opacity = 0.5;
  }

}
