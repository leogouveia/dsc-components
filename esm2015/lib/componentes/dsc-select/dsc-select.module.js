import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DscSelectComponent } from './dsc-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DscInputModule } from '../dsc-input/dsc-input.module';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
export class DscSelectModule {
}
DscSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DscSelectComponent
                ],
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatTooltipModule,
                    MatIconModule,
                    DscInputModule,
                    MatChipsModule,
                    ReactiveFormsModule
                ],
                exports: [DscSelectComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNjLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kc2MtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudGVzL2RzYy1zZWxlY3QvZHNjLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBb0JyRCxNQUFNLE9BQU8sZUFBZTs7O1lBaEIzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHNjU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9kc2Mtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBEc2NJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2RzYy1pbnB1dC9kc2MtaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERzY1NlbGVjdENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIERzY0lucHV0TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RzY1NlbGVjdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRHNjU2VsZWN0TW9kdWxlIHsgfVxuIl19