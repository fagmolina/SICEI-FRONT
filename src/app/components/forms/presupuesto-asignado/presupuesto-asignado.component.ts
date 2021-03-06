import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

@Component({
  selector: 'app-presupuesto-asignado',
  templateUrl: './presupuesto-asignado.component.html',
  styleUrls: ['./presupuesto-asignado.component.scss']
})
export class PresupuestoAsignadoComponent implements OnInit, OnDestroy, AfterViewInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  totalExterno;
  totalInterno;
  totalGeneral;
  presupuestoForm: FormGroup;

  constructor(private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.formCreation();
    this.formChanges();
    this.checkSubscriptions();
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.presupuestoForm.reset();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formCreation() {
    this.presupuestoForm = new FormGroup(
      {
        colcienciasCheck: new FormControl(false),
        colcienciasDescripcionControl: new FormControl({ value: '', disabled: true }),
        colcienciasAporteControl: new FormControl({ value: '', disabled: true }),

        ministeriosCheck: new FormControl(false),
        ministerioDescripcionControl: new FormControl({ value: '', disabled: true }),
        ministerioAporteControl: new FormControl({ value: '', disabled: true }),

        eIntCheck: new FormControl(false),
        eIntDescripcionControl: new FormControl({ value: '', disabled: true }),
        eIntAporteControl: new FormControl({ value: '', disabled: true }),

        oInstCheck: new FormControl(false),
        oInstDescripcionControl: new FormControl({ value: '', disabled: true }),
        oInstAporteControl: new FormControl({ value: '', disabled: true }),

        OFPLACheck: new FormControl(false),
        OFPLAControl: new FormControl({ value: '', disabled: true }),

        DINAECheck: new FormControl(false),
        DINAEControl: new FormControl({ value: '', disabled: true }),

        convExtCheck: new FormControl(false),
        convenioExDescControl: new FormControl({ value: '', disabled: true }),
        convenioExAporteControl: new FormControl({ value: '', disabled: true })
      },
      [Validators.required]
    );
  }

  formValid() {
    this.presupuestoForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepSeven: valid === 'VALID'
      });
    });
  }

  checkSubscriptions() {
    const form = this.presupuestoForm.controls;

    form.colcienciasCheck.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(a => this.fieldEnable('colcienciasDescripcionControl', 'colcienciasAporteControl', a));

    form.ministeriosCheck.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(b => this.fieldEnable('ministerioDescripcionControl', 'ministerioAporteControl', b));

    form.eIntCheck.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(c => this.fieldEnable('eIntDescripcionControl', 'eIntAporteControl', c));

    form.oInstCheck.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(d => this.fieldEnable('oInstDescripcionControl', 'oInstAporteControl', d));

    form.OFPLACheck.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(e => this.fieldEnable('', 'OFPLAControl', e));

    form.DINAECheck.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(f => this.fieldEnable('', 'DINAEControl', f));

    form.convExtCheck.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(g => this.fieldEnable('convenioExDescControl', 'convenioExAporteControl', g));
  }

  formChanges() {
    const form = this.presupuestoForm.controls;

    this.presupuestoForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(changes => {
      this.totalExterno =
        form.colcienciasAporteControl.value +
        form.ministerioAporteControl.value +
        form.eIntAporteControl.value +
        form.oInstAporteControl.value;
      this.totalInterno = form.OFPLAControl.value + form.DINAEControl.value;
      this.totalGeneral = this.calcTotal(this.totalExterno, this.totalInterno, form.convenioExAporteControl.value);

      // ASignación al formulario principal
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        presupuestoAsignado: {
          ...changes,
          totalExterno: this.totalExterno,
          totalInterno: this.totalInterno,
          totalGeneral: this.totalGeneral
        }
      });
    });
  }

  calcTotal(a, b, c) {
    return this.calcOne(a) + this.calcOne(b) + this.calcOne(c);
  }

  calcOne(x) {
    const y = x === '' || x === null || x === undefined ? 0 : parseInt(x, 10);
    return y;
  }

  fieldEnable(desc, aporte, check) {
    const form = this.presupuestoForm.controls;

    if (check) {
      if (desc !== '') {
        form[desc].enable();
        form[desc].setValidators([Validators.required]);
      }
      form[aporte].enable();
      form[aporte].setValidators([Validators.required]);
    } else {
      if (desc !== '') {
        form[desc].reset();
        form[desc].clearValidators();
        form[desc].disable();
      }
      form[aporte].setValue('');
      form[aporte].clearValidators();
      form[aporte].disable();
    }
  }
}
