import numeral from 'numeral';

export class CurrencyFormatValueConverter {
    toView(value) {

        if(!value)
            return numeral(0).format('($0,0.00)');

        return numeral(value).format('($0,0.00)');
    }
}