export function configure(config) {
    config.globalResources(
        'common/converters/datetime',
        'common/converters/currency',
        'common/components/number-spin',
        'services/spinner'
    );
}