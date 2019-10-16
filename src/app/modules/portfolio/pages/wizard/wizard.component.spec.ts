import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatListModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule, MatBadgeModule, MatCardModule,
  MatSelectModule, MatFormFieldModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatStepperModule, MatCheckboxModule,
  MatInputModule,
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TopToolbarComponent } from '../../components/top-toolbar/top-toolbar.component';
import { FormatDatePipe } from 'src/app/shared/pipes/format-date.pipe';
import { EventsService } from 'src/app/core/services/events.service';
import { MockStorageService } from 'src/app/core/mocks/storage.service.mock';
import { MockDialogsService } from 'src/app/modules/dialogs/mocks/dialogs.service.mock';
import { MockPortfolioService } from '../../mocks/portfolio.service.mock';
import { MockLoggerService } from 'src/app/core/mocks/loger.service.mock';
import { LoggerService } from 'src/app/core/services/logger.service';
import { PortfolioService } from '../../services/portfolio.service';
import { DialogsService } from 'src/app/modules/dialogs/dialogs.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { AssetManagementService } from '../../services/asset-management.service';
import { MockAssetManagementService } from 'src/app/modules/dialogs/mocks/asset-management.service.mock';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { WizardComponent } from './wizard.component';
import { ConfigService } from 'src/app/core/services/config.service';
import { MockConfigService } from 'src/app/core/mocks/config.service.mock';
import { CurrencySymbolPipe } from 'src/app/shared/pipes/currency-symbol.pipe';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        MatToolbarModule,
        MatBadgeModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        ScrollingModule,
        MatStepperModule,
        MatCheckboxModule,
        MatInputModule,
      ],
      declarations: [
        WizardComponent,
        TopToolbarComponent,
        FormatDatePipe,
        CurrencySymbolPipe,
      ],
      providers: [
        { provide: LoggerService, useClass: MockLoggerService },
        { provide: PortfolioService, useClass: MockPortfolioService },
        { provide: DialogsService, useClass: MockDialogsService },
        { provide: StorageService, useClass: MockStorageService },
        { provide: ConfigService, useClass: MockConfigService },
        //        { provide: AssetManagementService, useClass: MockAssetManagementService },
        EventsService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
