import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TamanhoDatePickerEnum } from '../../enum/datePickerEnums';
import { tamanhoDatePickerType } from '../../types/datePickerTypes';
export declare class DscDatePickerComponent implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
    dscPlaceHolder?: string;
    dscPlaceHolder_: string;
    dscRotulo?: string;
    dscRotulo_: string;
    dscInformacaoAdicional?: string;
    dscInformacaoAdicional_?: string;
    dscIconeInformativo?: string;
    dscIconeInformativo_?: string;
    dscTipoTamanhoDatePicker: tamanhoDatePickerType;
    dscTipoTamanhoDatePicker_: TamanhoDatePickerEnum;
    mapaTamanhoDatePicker: Map<TamanhoDatePickerEnum, string>;
    mapaHeader: Map<TamanhoDatePickerEnum, string>;
    classeHeader: string;
    classFormField: string;
    onTouched: Function;
    onChangeSubs: Subscription[];
    formControlDatePicker: FormControl;
    input: ElementRef;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _configurarInputMask;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    validate(): any;
    registerOnChange(onChange: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: any): void;
    registerOnTouched(onTouched: Function): void;
    inicializarMapaTamanhoInput(): void;
    inicializarMapaHeader(): void;
    aplicarClasseMatFormField(): void;
}
