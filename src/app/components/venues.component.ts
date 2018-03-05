import {Component, EventEmitter, Output} from "@angular/core";
import {FoursquareService} from '../services/foursquare.service';
import {MatSliderChange} from '@angular/material';

@Component({
    selector: 'venues',
    templateUrl: './venues.component.html',
    styleUrls: ['./venues.component.css']
})

export class VenuesComponent {

    private ready: boolean = false;
    private latitude: string;
    private longitude: string;
    private section: string = null;
    radius: number;
    recommendedPlaces: any = [];

    constructor(private foursquareService: FoursquareService) {

    }

    ngOnInit() {
        this.getUserLocation();
        this.radius = 250;

        this.foursquareService.recommendedPlacesChange.subscribe(recommendedPlaces => {
            this.recommendedPlaces = recommendedPlaces;
        });
    }

    getVenues(){
        const options = {
            latitude: this.latitude,
            longitude: this.longitude,
            radius: this.radius,
            section: this.section
        };

        this.foursquareService.getVenues(options);
    }

    getUserLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                this.latitude = position.coords.latitude.toString();
                this.longitude = position.coords.longitude.toString();
                this.ready = true;
            });
        } else {
            alert("Geolocation is not available. Please enable it.");
            this.ready = false;
        }
    }


}
