export type TransitionModel = 'lg-slide' | 'lg-fade' | 'lg-zoom-in' | 'lg-zoom-in-big' | 'lg-zoom-out' | 'lg-zoom-out-big' | 'lg-zoom-out-in' | 'lg-zoom-in-out' | 'lg-soft-zoom' | 'lg-scale-up' | 'lg-slide-circular' | 'lg-slide-circular-vertical' | 'lg-slide-vertical' | 'lg-slide-vertical-growth' | 'lg-slide-skew-only' | 'lg-slide-skew-only-rev' | 'lg-slide-skew-only-y' | 'lg-slide-skew-only-y-rev' | 'lg-slide-skew' | 'lg-slide-skew-rev' | 'lg-slide-skew-cross' | 'lg-slide-skew-cross-rev' | 'lg-slide-skew-ver' | 'lg-slide-skew-ver-rev' | 'lg-slide-skew-ver-cross' | 'lg-slide-skew-ver-cross-rev' | 'lg-lollipop' | 'lg-lollipop-rev' | 'lg-rotate' | 'lg-rotate-rev' | 'lg-tube';
export type AppendSubType = '.lg-sub-html' | '.lg-item';

export interface GalleryOptions {
    mode?: TransitionModel;
    //  Type of easing to be used for css animations; Ex: 'ease'
    cssEasing?: string;
    //'for jquery animation'
    easing?: string;
    speed?: number;
    height?: string;
    width?: string;
    addClass?: string;
    startClass?: string;
    backdropDuration?: number;
    hideBarsDelay?: number;
    useLeft?: boolean;
    closable?: boolean;
    loop?: boolean;
    escKey?: boolean;
    keyPress?: boolean;
    controls?: boolean;
    slideEndAnimatoin?: boolean;
    hideControlOnEnd?: boolean;
    mousewheel?: boolean;

    getCaptionFromTitleOrAlt?: boolean;

    // .lg-item || '.lg-sub-html'
    appendSubHtmlTo?: AppendSubType;

    subHtmlSelectorRelative?: boolean;

    /**
     * @desc number of preload slides
     * will exicute only after the current slide is fully loaded.
     *
     * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
     * slide will be loaded in the background after the 4th slide is fully loaded..
     * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
     *
     */
    preload?: number;
    showAfterLoad?: boolean;
    selector?: string;
    selectWithin?: string;
    nextHtml?: string;
    prevHtml?: string;

    // 0; 1
    index?: 0 | 1; // Allows to set which image/video should load initially

    iframeMaxWidth?: string;

    download?: boolean;
    counter?: boolean;
    appendCounterTo?: string;

    swipeThreshold?: number;
    enableSwipe?: boolean;
    enableDrag?: boolean;

    dynamic?: boolean;
    dynamicEl?: Array<GalleryModel>;
    galleryId?: number;
}
export interface GalleryModel {
    src?: string;
    thumb?: string;
    subHtml?: string;
    iframe?: string;
    poster?: string;
    responsive?: string;
    srcset?: string;
    sizes?: number;
    isCurrent?: boolean;
    isLoaded?: boolean;
    isComplete?: boolean;
}