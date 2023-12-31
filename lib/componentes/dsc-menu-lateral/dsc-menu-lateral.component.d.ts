import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuNivelEnum } from '../../enum/menuNivelEnum';
import { ItemMenuNormalComponent } from './item-menu-normal/item-menu-normal.component';
export declare type MatDrawerMode = 'over' | 'push' | 'side';
export declare class DscMenuLateralComponent implements OnInit, OnChanges {
    private router;
    dscMenuMode: MatDrawerMode;
    dscMenuOpen?: boolean;
    dscMenuOpen_: boolean;
    dscItemsMenu: Array<ItemMenu>;
    dscItemsMenu_: Array<ItemMenu>;
    dscFormControlInputPesquisa?: FormControl;
    dscFormControlInputPesquisa_?: FormControl;
    dscLogoProduto: string;
    dscLogoProduto_: string;
    dscFixed?: boolean;
    dscFixed_: boolean;
    dscTopGap?: number;
    dscTopGap_?: number;
    dscBottomGap?: number;
    dscBottomGap_?: number;
    dscMarginTopSidenavContent: number;
    menuNivelEnum: typeof MenuNivelEnum;
    mapaNivelEnum: Map<number, MenuNivelEnum>;
    refAtualAtiva?: ItemMenuNormalComponent;
    rotaAtual: string;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    isNormal(itemMenu: ItemMenu): boolean;
    isExpansivel(itemMenu: ItemMenu): boolean;
    private popularMapaNivelEnum;
    ouvirCallBack(itemMenu: any): void;
    tratarCallBackSelecionado(refNormal: ItemMenuNormalComponent): void;
    private escutarRotas;
}
export interface ItemMenu {
    nome: string;
    icone?: string;
    url?: string;
    callBack?: Function;
    filhos?: Array<ItemMenu>;
}
