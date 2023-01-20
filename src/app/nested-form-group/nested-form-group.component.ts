import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-nested-form-group',
    templateUrl: './nested-form-group.component.html'
})
export class NestedFormGroupComponent implements OnInit {

    @Input() title!: string;
    @Input() debug: boolean = true;
    form!: FormGroup;

    constructor(
        private controlContainer: ControlContainer
    ) {
    }

    ngOnInit() {
        this.form = this.controlContainer.control as FormGroup;
        this.form.addControl('nested1', new FormControl('nested1'));
        this.form.addControl('nested2', new FormControl('nested2'));
    }
}
