import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { direcaoIconeType, tamanhoBotaoType, tipoBotaoType } from '../../types/buttonTypes';
import { TamanhoBotaoEnum, TipoBotaoEnum, DirecaoIconeEnum } from '../../enum/buttonEnums';
export declare class DscButtonComponent implements OnInit, OnChanges {
    dscTextoBotao: string;
    dscTextoBotao_: string;
    dscTamanhoBotao: tamanhoBotaoType;
    dscTamanhoBotao_: TamanhoBotaoEnum;
    dscTipoBotao: tipoBotaoType;
    dscTipoBotao_: TipoBotaoEnum;
    dscDesabilitado: boolean;
    dscDesabilitado_: boolean;
    dscIcone?: string;
    dscIcone_: string;
    dscDirecaoIcone: direcaoIconeType;
    dscDirecaoIcone_: DirecaoIconeEnum;
    dscClick: EventEmitter<void>;
    estilo_botao: string;
    estilo_texto_botao: string;
    mapaTamanhoBotao: Map<TamanhoBotaoEnum, string>;
    mapaTipoBotao: Map<TipoBotaoEnum, string>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private preencherMapaTamanhoBotao;
    private preencherMapaTipoBotao;
    carregarClasses(): void;
    private pegarClassePorChave;
    private aplicarClasseDinamica;
    tratarTextoBotao(): void;
    isLeft(): boolean;
    isRight(): boolean;
    tratarClick(): void;
}