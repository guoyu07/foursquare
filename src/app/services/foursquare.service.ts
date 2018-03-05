import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class FoursquareService{
    private readonly CLIENT_ID = "CLZVP55L52IADU1OO4TO2CXTOEGPE2ZGMUXX3CIG3A2XKZ2K";
    private readonly CLIENT_SECRET = "NODOTKB0MCHOXQVRW1OW3BTSTXLAVX3UVFTJWBN5NYAOMLQV";
    private readonly URL = "https://api.foursquare.com/v2/venues/explore/";

    public recommendedPlaces: any = [];
    public recommendedPlacesChange: EventEmitter<any> = new EventEmitter();

    constructor(private apiService : ApiService) {

    }

    getVenues(options: any) {
        const today = new Date();
        const versioning = today.toISOString().substring(0, 10).replace(/-/g, '');

        let params = new HttpParams();
        params = params.set("ll", `${options.latitude},${options.longitude}`);
        params = params.set("radius", options.radius);
        params = params.set("client_id", this.CLIENT_ID);
        params = params.set("client_secret", this.CLIENT_SECRET);
        params = params.set("offset", "0");
        params = params.set("limit", "50");
        params = params.set("venuePhotos", "1");
        params = params.set("v", versioning);

        if(options.section) {
            params = params.set("section", options.section);
        }

        this.apiService.get(this.URL, params).subscribe(response => {
            if(!response) {
                return;
            }

            this.recommendedPlaces = response.response.groups[0].items;
            this.recommendedPlacesChange.emit(this.recommendedPlaces);
        });
    }

}
