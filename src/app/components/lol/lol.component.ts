import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lol',
    templateUrl: './lol.component.html'
})
export class LolComponent implements OnInit {

    ngOnInit(): void {
        console.log('ngOnInit');
    }
}