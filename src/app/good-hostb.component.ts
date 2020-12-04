import {
    Component,
    HostBinding,
    ChangeDetectorRef,
    HostListener,
    SkipSelf,
    ChangeDetectionStrategy
} from "@angular/core";

@Component({
    selector: "good-hostb-component",
    template: "Text good-hostb-component; blue {{isBlue}}",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodHostbComponent {
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

    constructor(@SkipSelf() private cdr: ChangeDetectorRef) { }
}
