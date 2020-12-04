import {
    Component,
    HostBinding,
    ChangeDetectorRef,
    HostListener,
    ChangeDetectionStrategy
} from "@angular/core";

@Component({
    selector: "bad-hostb-component",
    template: "Text bad-hostb-component; blue {{isBlue}}",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadHostbComponent {
    @HostBinding("class")
    readonly hostClass: string = "text";

    @HostBinding("class.blue")
    isBlue: boolean = false;

    @HostListener("mousedown")
    onMouseDown(): void {
        this.isBlue = true;
        this.cdr.detectChanges();
    }

    @HostListener("mouseup")
    onMouseUp(): void {
        this.isBlue = false;
        this.cdr.detectChanges();
    }

    constructor(private cdr: ChangeDetectorRef) { }
}
