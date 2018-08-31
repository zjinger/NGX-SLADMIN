import { Output, EventEmitter } from "@angular/core";

export class TabComponent {
    label?: string;
    title?: string;
    active?: boolean;
    disabled?: boolean;
    @Output() nzClick?= new EventEmitter<void>();
    @Output() nzSelect?= new EventEmitter<void>();
    @Output() nzDeselect?= new EventEmitter<void>();
    constructor() { }
}
