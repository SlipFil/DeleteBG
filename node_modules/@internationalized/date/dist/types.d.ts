export interface AnyCalendarDate {
    readonly calendar: Calendar;
    readonly era: string;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    copy(): this;
}
export interface AnyTime {
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    copy(): this;
}
export interface AnyDateTime extends AnyCalendarDate, AnyTime {
}
export interface Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(date: AnyCalendarDate): number;
    getYearsInEra(date: AnyCalendarDate): number;
    getEras(): string[];
    getMinimumMonthInYear?(date: AnyCalendarDate): number;
    getMinimumDayInMonth?(date: AnyCalendarDate): number;
    balanceDate?(date: AnyCalendarDate): void;
    balanceYearMonth?(date: AnyCalendarDate, previousDate: AnyCalendarDate): void;
    getYearsToAdd?(date: AnyCalendarDate, years: number): number;
    constrainDate?(date: AnyCalendarDate): void;
}
export interface Duration {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export interface DateFields {
    era?: string;
    year?: number;
    month?: number;
    day?: number;
}
export interface TimeFields {
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
}
export type DateField = keyof DateFields;
export type TimeField = keyof TimeFields;
export type Disambiguation = 'compatible' | 'earlier' | 'later' | 'reject';
export interface CycleOptions {
    /** Whether to round the field value to the nearest interval of the amount. */
    round?: boolean;
}
export interface CycleTimeOptions extends CycleOptions {
    /**
     * Whether to use 12 or 24 hour time. If 12 hour time is chosen, the resulting value
     * will remain in the same day period as the original value (e.g. if the value is AM,
     * the resulting value also be AM).
     * @default 24
     */
    hourCycle?: 12 | 24;
}
type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime;
export function isSameDay(a: DateValue, b: DateValue): boolean;
export function isSameMonth(a: DateValue, b: DateValue): boolean;
export function isSameYear(a: DateValue, b: DateValue): boolean;
export function isEqualDay(a: DateValue, b: DateValue): boolean;
export function isEqualMonth(a: DateValue, b: DateValue): boolean;
export function isEqualYear(a: DateValue, b: DateValue): boolean;
export function isToday(date: DateValue, timeZone: string): boolean;
export function getDayOfWeek(date: DateValue, locale: string): number;
export function now(timeZone: string): ZonedDateTime;
export function today(timeZone: string): CalendarDate;
export function compareDate(a: AnyCalendarDate, b: AnyCalendarDate): number;
export function compareTime(a: AnyTime, b: AnyTime): number;
export function getHoursInDay(a: CalendarDate, timeZone: string): number;
export function getLocalTimeZone(): string;
export function startOfMonth(date: ZonedDateTime): ZonedDateTime;
export function startOfMonth(date: CalendarDateTime): CalendarDateTime;
export function startOfMonth(date: CalendarDate): CalendarDate;
export function startOfMonth(date: DateValue): DateValue;
export function endOfMonth(date: ZonedDateTime): ZonedDateTime;
export function endOfMonth(date: CalendarDateTime): CalendarDateTime;
export function endOfMonth(date: CalendarDate): CalendarDate;
export function endOfMonth(date: DateValue): DateValue;
export function startOfYear(date: ZonedDateTime): ZonedDateTime;
export function startOfYear(date: CalendarDateTime): CalendarDateTime;
export function startOfYear(date: CalendarDate): CalendarDate;
export function startOfYear(date: DateValue): DateValue;
export function endOfYear(date: ZonedDateTime): ZonedDateTime;
export function endOfYear(date: CalendarDateTime): CalendarDateTime;
export function endOfYear(date: CalendarDate): CalendarDate;
export function endOfYear(date: DateValue): DateValue;
export function getMinimumMonthInYear(date: AnyCalendarDate): number;
export function getMinimumDayInMonth(date: AnyCalendarDate): number;
export function startOfWeek(date: ZonedDateTime, locale: string): ZonedDateTime;
export function startOfWeek(date: CalendarDateTime, locale: string): CalendarDateTime;
export function startOfWeek(date: CalendarDate, locale: string): CalendarDate;
export function startOfWeek(date: DateValue, locale: string): DateValue;
export function endOfWeek(date: ZonedDateTime, locale: string): ZonedDateTime;
export function endOfWeek(date: CalendarDateTime, locale: string): CalendarDateTime;
export function endOfWeek(date: CalendarDate, locale: string): CalendarDate;
export function getWeeksInMonth(date: DateValue, locale: string): number;
export function minDate<A extends DateValue, B extends DateValue>(a: A, b: B): A | B;
export function maxDate<A extends DateValue, B extends DateValue>(a: A, b: B): A | B;
export function isWeekend(date: DateValue, locale: string): boolean;
export function isWeekday(date: DateValue, locale: string): boolean;
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export class GregorianCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(date: AnyCalendarDate): number;
    getEras(): string[];
    getYearsToAdd(date: Mutable<AnyCalendarDate>, years: number): number;
    balanceDate(date: Mutable<AnyCalendarDate>): void;
}
export function epochFromDate(date: AnyDateTime): number;
export function getTimeZoneOffset(ms: number, timeZone: string): number;
export function possibleAbsolutes(date: CalendarDateTime, timeZone: string): number[];
export function toAbsolute(date: CalendarDate | CalendarDateTime, timeZone: string, disambiguation?: Disambiguation): number;
export function toDate(dateTime: CalendarDate | CalendarDateTime, timeZone: string, disambiguation?: Disambiguation): Date;
export function fromAbsolute(ms: number, timeZone: string): ZonedDateTime;
export function fromDate(date: Date, timeZone: string): ZonedDateTime;
export function fromDateToLocal(date: Date): ZonedDateTime;
export function toCalendarDate(dateTime: AnyCalendarDate): CalendarDate;
export function toDateFields(date: AnyCalendarDate): DateFields;
export function toTimeFields(date: AnyTime): TimeFields;
export function toCalendarDateTime(date: CalendarDate | CalendarDateTime | ZonedDateTime, time?: AnyTime): CalendarDateTime;
export function toTime(dateTime: CalendarDateTime): Time;
export function toCalendar<T extends AnyCalendarDate>(date: T, calendar: Calendar): T;
export function toZoned(date: CalendarDate | CalendarDateTime | ZonedDateTime, timeZone: string, disambiguation?: Disambiguation): ZonedDateTime;
export function zonedToDate(date: ZonedDateTime): Date;
export function toTimeZone(date: ZonedDateTime, timeZone: string): ZonedDateTime;
export function toLocalTimeZone(date: ZonedDateTime): ZonedDateTime;
export function parseTime(value: string): Time;
export function parseDate(value: string): CalendarDate;
export function parseDateTime(value: string): CalendarDateTime;
export function parseZonedDateTime(value: string, disambiguation?: Disambiguation): ZonedDateTime;
export function parseAbsolute(value: string, timeZone: string): ZonedDateTime;
export function parseAbsoluteToLocal(value: string): ZonedDateTime;
export function timeToString(time: Time): string;
export function dateToString(date: CalendarDate): string;
export function dateTimeToString(date: AnyDateTime): string;
export function zonedDateTimeToString(date: ZonedDateTime): string;
export class CalendarDate {
    #private;
    readonly calendar: Calendar;
    readonly era: string;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    constructor(year: number, month: number, day: number);
    constructor(calendar: Calendar, year: number, month: number, day: number);
    constructor(calendar: Calendar, era: string, year: number, month: number, day: number);
    copy(): CalendarDate;
    add(duration: Duration): CalendarDate;
    subtract(duration: Duration): CalendarDate;
    set(fields: DateFields): CalendarDate;
    cycle(field: DateField, amount: number, options?: CycleOptions): CalendarDate;
    toDate(timeZone: string): Date;
    toString(): string;
    compare(b: AnyCalendarDate): number;
}
export class Time {
    #private;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    constructor(hour?: number, minute?: number, second?: number, millisecond?: number);
    copy(): Time;
    add(duration: Duration): Time;
    subtract(duration: Duration): Time;
    set(fields: TimeFields): Time;
    cycle(field: TimeField, amount: number, options?: CycleTimeOptions): Time;
    toString(): string;
    compare(b: AnyTime): number;
}
export class CalendarDateTime {
    #private;
    readonly calendar: Calendar;
    readonly era: string;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    constructor(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    constructor(calendar: Calendar, year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    constructor(calendar: Calendar, era: string, year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    copy(): CalendarDateTime;
    add(duration: Duration): CalendarDateTime;
    subtract(duration: Duration): CalendarDateTime;
    set(fields: DateFields & TimeFields): CalendarDateTime;
    cycle(field: DateField | TimeField, amount: number, options?: CycleTimeOptions): CalendarDateTime;
    toDate(timeZone: string): Date;
    toString(): string;
    compare(b: CalendarDate | CalendarDateTime | ZonedDateTime): number;
}
export class ZonedDateTime {
    #private;
    readonly calendar: Calendar;
    readonly era: string;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly timeZone: string;
    readonly offset: number;
    constructor(year: number, month: number, day: number, timeZone: string, offset: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    constructor(calendar: Calendar, year: number, month: number, day: number, timeZone: string, offset: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    constructor(calendar: Calendar, era: string, year: number, month: number, day: number, timeZone: string, offset: number, hour?: number, minute?: number, second?: number, millisecond?: number);
    copy(): ZonedDateTime;
    add(duration: Duration): ZonedDateTime;
    subtract(duration: Duration): ZonedDateTime;
    set(fields: DateFields & TimeFields, disambiguation?: Disambiguation): ZonedDateTime;
    cycle(field: DateField | TimeField, amount: number, options?: CycleTimeOptions): ZonedDateTime;
    toDate(): Date;
    toString(): string;
    toAbsoluteString(): string;
    compare(b: CalendarDate | CalendarDateTime | ZonedDateTime): number;
}
export class JapaneseCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    balanceDate(date: Mutable<AnyCalendarDate>): void;
    constrainDate(date: Mutable<AnyCalendarDate>): void;
    getEras(): string[];
    getYearsInEra(date: AnyCalendarDate): number;
    getMinimumMonthInYear(date: AnyCalendarDate): number;
    getMinimumDayInMonth(date: AnyCalendarDate): number;
}
export class BuddhistCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getEras(): string[];
}
export class TaiwanCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getEras(): string[];
    balanceDate(date: Mutable<AnyCalendarDate>): void;
    getYearsToAdd(date: Mutable<AnyCalendarDate>, years: number): number;
}
export class PersianCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getMonthsInYear(): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getEras(): string[];
    getYearsInEra(): number;
}
export class IndianCalendar extends GregorianCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
}
export class IslamicCivilCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
}
export class IslamicTabularCalendar extends IslamicCivilCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
}
export class IslamicUmalquraCalendar extends IslamicCivilCalendar {
    identifier: string;
    constructor();
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
}
export class HebrewCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(date: AnyCalendarDate): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
    balanceYearMonth(date: Mutable<AnyCalendarDate>, previousDate: AnyCalendarDate): void;
}
export class EthiopicCalendar implements Calendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getMonthsInYear(): number;
    getDaysInYear(date: AnyCalendarDate): number;
    getYearsInEra(): number;
    getEras(): string[];
}
export class EthiopicAmeteAlemCalendar extends EthiopicCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    getEras(): string[];
}
export class CopticCalendar extends EthiopicCalendar {
    identifier: string;
    fromJulianDay(jd: number): CalendarDate;
    toJulianDay(date: AnyCalendarDate): number;
    getDaysInMonth(date: AnyCalendarDate): number;
    getYearsToAdd(date: Mutable<AnyCalendarDate>, years: number): number;
    getEras(): string[];
}
export function createCalendar(name: string): Calendar;
interface ResolvedDateTimeFormatOptions extends Intl.ResolvedDateTimeFormatOptions {
    hourCycle?: Intl.DateTimeFormatOptions['hourCycle'];
}
interface DateRangeFormatPart extends Intl.DateTimeFormatPart {
    source: 'startRange' | 'endRange' | 'shared';
}
export class DateFormatter implements Intl.DateTimeFormat {
    constructor(locale: string, options?: Intl.DateTimeFormatOptions);
    format(value: Date): string;
    formatToParts(value: Date): Intl.DateTimeFormatPart[];
    formatRange(start: Date, end: Date): string;
    formatRangeToParts(start: Date, end: Date): DateRangeFormatPart[];
    resolvedOptions(): ResolvedDateTimeFormatOptions;
}

//# sourceMappingURL=types.d.ts.map
