import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    form!: FormGroup;

    private destroy$ = new Subject<void>();

    constructor(
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            text1: ['text1'],
            text2: ['text2'],
            nestedFormArray: this.fb.array([]),
            nestedFormGroup: this.fb.group({})
        });

        this.form.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((change) => console.log('Form value changed: ', change));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
