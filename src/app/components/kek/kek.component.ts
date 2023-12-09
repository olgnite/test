import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-kek',
    templateUrl: './kek.component.html',
})
export class KekComponent implements OnInit {

    @Input()
    public title!: string;

    // public ngOnChanges(changes: SimpleChanges): void {
    //     console.log('ngOnChanges');
    // }

    public ngOnInit(): void {
        console.log('ngOnInit')
    }
}