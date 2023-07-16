import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DscInputComponent } from "./dsc-input.component";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
export class DscInputModule {
}
DscInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DscInputComponent,
                ],
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    ReactiveFormsModule,
                    MatTooltipModule
                ],
                exports: [
                    DscInputComponent,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNjLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RzYy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50ZXMvZHNjLWlucHV0L2RzYy1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFtQjdELE1BQU0sT0FBTyxjQUFjOzs7WUFoQjFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IERzY0lucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vZHNjLWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHNjSW5wdXRDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEc2NJbnB1dENvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEc2NJbnB1dE1vZHVsZSB7IH1cblxuXG4iXX0=