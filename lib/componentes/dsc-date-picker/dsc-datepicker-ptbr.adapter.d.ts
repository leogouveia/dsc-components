import { NativeDateAdapter } from '@angular/material/core';
export declare class DscDatepickerPtbrAdapter extends NativeDateAdapter {
    parse(value: any): Date | null;
    format(date: Date, displayFormat: Object): string;
}
