import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DscDatePickerComponent } from './dsc-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
export class DscDatePickerModule {
}
DscDatePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DscDatePickerComponent
                ],
                imports: [
                    CommonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatInputModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                    MatTooltipModule,
                    MatIconModule
                ],
                exports: [DscDatePickerComponent],
                providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNjLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RzYy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50ZXMvZHNjLWRhdGUtcGlja2VyL2RzYy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFtQnZELE1BQU0sT0FBTyxtQkFBbUI7OztZQWpCL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEVBQUU7YUFDNUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERzY0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RzYy1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTUFUX0RBVEVfTE9DQUxFLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERzY0RhdGVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtEc2NEYXRlUGlja2VyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdwdC1CUid9LF1cbn0pXG5leHBvcnQgY2xhc3MgRHNjRGF0ZVBpY2tlck1vZHVsZSB7IH1cbiJdfQ==