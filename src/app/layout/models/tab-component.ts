import { Output, EventEmitter } from "@angular/core";

export class TabComponent {
    index?: number;
    label?: string;
    title?: string;
    active?: boolean;
    disabled?: boolean;
    closable?: boolean;
    url?: string;
    last?: boolean;
    @Output() nzClick?= new EventEmitter<void>();
    @Output() nzSelect?= new EventEmitter<void>();
    @Output() nzDeselect?= new EventEmitter<void>();
    constructor() { }
}
