import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TamanhoSelectEnum } from '../../enum/selectEnums';
import { tamanhoSelectType, tipoTextoFeedBackType } from '../../types/selectTypes';
export declare class DscSelectComponent implements OnInit, OnChanges, ControlValueAccessor, OnDestroy, Validator {
    private _unsubscribeAll;
    dscRotulo: string;
    dscRotulo_: string;
    dscInformacaoAdicional: string;
    dscInformacaoAdicional_: string;
    dscIconeInformativo: string;
    dscIconeInformativo_: string;
    dscIconLeft: string;
    dscIconLeft_: string;
    dscTipoTextoFeedBack: tipoTextoFeedBackType;
    dscTipoTextoFeedBack_: tipoTextoFeedBackType;
    dscTextoFeedBack: string;
    dscTextoFeedBack_: string;
    dscTextoComplementar: string;
    dscTextoComplementar_: string;
    dscPlaceHolder: string;
    dscPlaceHolder_: string;
    dscIsMultiple: boolean;
    dscIsMultiple_: boolean;
    dscOptions: {
        label: string;
        value: any;
    }[];
    dscOptions_: {
        label: string;
        value: any;
    }[];
    dscOptionsGroup: {
        label: string;
        options: {
            label: string;
            value: any;
        }[];
    }[];
    dscOptionsGroup_: {
        label: string;
        options: {
            label: string;
            value: any;
        }[];
    }[];
    dscTipoTamanhoSelect: tamanhoSelectType;
    dscTipoTamanhoSelect_: TamanhoSelectEnum;
    dscHasFilter: boolean;
    dscHasFilter_: boolean;
    optionsAux: {
        label: string;
        value: any;
    }[];
    optionsGroupAux: {
        label: string;
        options: {
            label: string;
            value: any;
        }[];
    }[];
    icone_feedBack: string;
    classe_box: string;
    mapaClasseIcone: Map<string, string>;
    formControlSearch: FormControl;
    classComplementar: string;
    onTouched: Function;
    onChangeSubs: Subscription[];
    classFormField: string;
    classeHeader: string;
    mapaTamanhoSelect: Map<TamanhoSelectEnum, string>;
    mapaHeader: Map<TamanhoSelectEnum, string>;
    classeBorda: string;
    formControlSelect: FormControl;
    constructor();
    ngOnInit(): void;
    private escutarInputFiltro;
    ngOnChanges(changes: SimpleChanges): void;
    validate(control: AbstractControl): any;
    registerOnChange(onChange: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: any): void;
    registerOnTouched(onTouched: Function): void;
    aplicarClasseFeedBack(): void;
    inicializarMapa(): void;
    inicializarMapaHeader(): void;
    inicializarMapaTamanhoInput(): void;
    aplicarClasseComplementar(): void;
    tratarAbertura($event: boolean): void;
    aplicarClasseMatFormField(): void;
    escurtarSelectTratarBorda(): void;
    private unsubscribeAll;
    ngOnDestroy(): void;
}
