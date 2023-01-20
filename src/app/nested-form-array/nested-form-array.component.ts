import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-nested-form-array',
    templateUrl: './nested-form-array.component.html'
})
export class NestedFormArrayComponent implements OnInit {

    form!: FormArray;

    constructor(
        private fb: FormBuilder,
        private controlContainer: ControlContainer
    ) {
    }

    get formGroups(): FormGroup[] {
        return this.form.controls as FormGroup[];
    }

    ngOnInit(): void {
        this.form = this.controlContainer.control as FormArray;
        console.log(this.form);
    }

    onAdd() {
        this.form.push(this.fb.group({
            firstName: [],
            middleName: [],
            lastName: []
        }));
    }

    onRemove(index: number) {
        this.form.removeAt(index);
    }
}
