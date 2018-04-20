import { Component, OnInit, Input } from '@angular/core';
import { Delivery } from '../delivery';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeliveryService }  from '../delivery.service';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})

export class DeliveryDetailComponent implements OnInit {
  @Input() delivery: Delivery;

  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDelivery();
  }
  
  getDelivery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deliveryService.getDelivery(id)
      .subscribe(delivery => this.delivery = delivery);
  }

  goBack(): void {
    this.location.back();
  }

}
