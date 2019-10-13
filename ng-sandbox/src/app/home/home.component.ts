import { Destination } from './models/destination.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    public readonly destinations: Destination[] = [
        {
            name: 'Empty Page',
            location: '/empty'
        }
    ];

    constructor(private router: Router) {}

    public navigate(location: string): void {
        this.router.navigateByUrl(location);
    }
}
