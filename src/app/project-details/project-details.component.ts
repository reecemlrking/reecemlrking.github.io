import { Component, input } from '@angular/core';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { ProjectDetailsInfo } from '../project-details-info';
// import { MatButtonModule } from '@angular/material/button';
// import {
//   MAT_DIALOG_DATA,
//   MatDialog,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogRef,
//   MatDialogTitle
// } from '@angular/material/dialog';
// import { inject } from '@angular/core/primitives/di';
//
@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  //  readonly dialog = inject(MatDialog);
  project = input.required<ProjectDetailsInfo>();

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(TestDialogComponent, {
  //     height: '400px',
  //     width: '400px'
  //   });
  // }
}

// @Component({
//   selector: 'test-dialog',
//   templateUrl: 'test-dialog.html',
//   imports: [
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class TestDialogComponent {
//   readonly dialogRef = inject(MatDialogRef<TestDialogComponent>);
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
