import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ToolbarTypeConfig } from './shared/toolbar-type-config';
export declare class DscHeaderComponent implements AfterViewInit, OnDestroy {
    readonly toolbarTypes: Map<string, ToolbarTypeConfig>;
    private _mobileQueryListener;
    toolbarDiv: ElementRef;
    dscTipoAcesso: 'interno' | 'externo';
    dscSiglaSistema: string;
    dscNomeSistema: string;
    dscTipoClassificacaoConteudo: 'publico' | 'confidencial';
    dscClassificacaoConteudo?: string;
    dscTipoVariacaoHeader: string;
    mobileQuery: MediaQueryList;
    toggleEvent: EventEmitter<void>;
    trademarkEvent: EventEmitter<void>;
    toolbarHeightEvent: EventEmitter<void>;
    isLogoFull: boolean;
    isToogleButton: boolean;
    isToogleButtonRight: boolean;
    isToggleButtonLabel: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _buildToolbarBy;
    onToggle(): void;
    onTrandmarkClicked(): void;
    ngOnDestroy(): void;
}
