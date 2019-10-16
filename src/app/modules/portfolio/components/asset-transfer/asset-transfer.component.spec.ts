import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTransferComponent, AssetTransferData } from './asset-transfer.component';
import {
  MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule,
  MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatDialogRef, MatCardModule, MatIconModule, MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencySymbolPipe } from 'src/app/shared/pipes/currency-symbol.pipe';
import { DialogsService } from 'src/app/modules/dialogs/dialogs.service';
import { MockDialogsService } from 'src/app/modules/dialogs/mocks/dialogs.service.mock';
import { SAMPLE_ACCOUNTS, SAMPLE_ASSETS } from '../../mocks/sample-accounts.mock';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { RecurringTransactionInputComponent } from '../recurring-transaction-input/recurring-transaction-input.component';

const dialogData: AssetTransferData = {
  accounts: [SAMPLE_ACCOUNTS.account1, SAMPLE_ACCOUNTS.account2],
  sourceAccount: SAMPLE_ACCOUNTS.account1,
  sourceAsset: SAMPLE_ASSETS.EURCashAsset,
  sourcePosition: null,
};

describe('AssetTransferComponent', () => {
  let component: AssetTransferComponent;
  let fixture: ComponentFixture<AssetTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        NoopAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
      ],
      declarations: [
        AssetTransferComponent,
        EditDialogComponent,
        RecurringTransactionInputComponent,
        CurrencySymbolPipe,
      ],
      providers: [
        { provide: DialogsService, useClass: MockDialogsService },
        {
          provide: MatDialogRef,
          useValue: {}
        }, {
          provide: MAT_DIALOG_DATA,
          useValue: dialogData
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
