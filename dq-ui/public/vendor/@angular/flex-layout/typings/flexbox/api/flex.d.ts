import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LayoutDirective } from './layout';
import { LayoutWrapDirective } from './layout-wrap';
export declare type FlexBasisAlias = 'grow' | 'initial' | 'auto' | 'none' | 'nogrow' | 'noshrink';
export declare class FlexDirective extends BaseFxDirective implements OnInit, OnChanges, OnDestroy {
    protected _container: LayoutDirective;
    protected _wrap: LayoutWrapDirective;
    protected _layout: string;
    protected _layoutWatcher: Subscription;
    shrink: any;
    grow: any;
    flex: any;
    flexXs: any;
    flexSm: any;
    flexMd: any;
    flexLg: any;
    flexXl: any;
    flexGtXs: any;
    flexGtSm: any;
    flexGtMd: any;
    flexGtLg: any;
    flexLtSm: any;
    flexLtMd: any;
    flexLtLg: any;
    flexLtXl: any;
    constructor(monitor: MediaMonitor, elRef: ElementRef, renderer: Renderer2, _container: LayoutDirective, _wrap: LayoutWrapDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _onLayoutChange(direction?: string): void;
    protected _updateStyle(value?: string | number): void;
    protected _validateValue(grow: number | string, shrink: number | string, basis: string | number | FlexBasisAlias): any;
}
