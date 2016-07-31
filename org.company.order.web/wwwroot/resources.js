export function configure(config) {
    config.globalResources(
        'common/converters/datetime',
        'common/converters/currency',
        'common/components/number-spin',
        'common/components/carousel',
        'common/components/fancybox-detail-view',
        'common/components/fancybox-image-view',
        'services/spinner'
    );
}