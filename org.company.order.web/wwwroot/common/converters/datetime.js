import moment from 'moment';

export class DateFormatValueConverter {
    toView(value) {

        return moment(new Date(value)).format('DD/MM/YYYY hh:mm');
    }
}