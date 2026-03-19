<!-- aui-calendar -->
<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <div :class="selectedStyle.header">
      <button type="button" :class="selectedStyle.navButton" aria-label="Previous month" @click="prevMonth">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="flex-grow flex items-center justify-center gap-2">
        <select v-model="selectedMonth" :class="selectedStyle.headerSelect" aria-label="Select month">
          <option v-for="month in monthOptions" :key="month.value" :value="month.value">
            {{ month.label }}
          </option>
        </select>
        <select v-model="selectedYear" :class="selectedStyle.headerSelect" aria-label="Select year">
          <option v-for="year in yearRange" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>

      <button type="button" :class="selectedStyle.navButton" aria-label="Next month" @click="nextMonth">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div :class="selectedStyle.monthsContainer">
      <div v-for="(month, index) in months" :key="index" class="flex-1">
        <div v-if="numberOfMonths > 1" class="text-center font-semibold mb-2">
          {{ currentLocale.months[month.getMonth()] }} {{ month.getFullYear() }}
        </div>
        <div :class="selectedStyle.grid">
          <div v-for="dayName in currentLocale.weekdays" :key="dayName" :class="selectedStyle.weekday">
            {{ dayName.slice(0, 2) }}
          </div>
          <div v-for="(day, dayIndex) in getCalendarGrid(month)" :key="dayIndex" :class="getDayClasses(day)"
            @click="selectDate(day.date)">
            <slot name="day" :day="day">
              <span>{{ day.date.getDate() }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, defineModel } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { locales, type Locale } from "../i18n";
import { useStyle, useTheme } from "#imports";

interface DateRange {
  start: Date | null;
  end: Date | null;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  range: {
    type: Boolean,
    default: false
  },
  numberOfMonths: {
    type: Number,
    default: 1
  },
  disabledDates: {
    type: Array as PropType<Date[]>,
    default: () => []
  },
  disableBefore: {
    type: Date as PropType<Date | null>,
    default: null
  },
  disableAfter: {
    type: Date as PropType<Date | null>,
    default: null
  },
  locale: {
    type: String as PropType<Locale>,
    default: "en"
  }
});

const modelValue = defineModel<Date | DateRange | null>();
const emit = defineEmits(["display-date-change", "date-click"]);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const today = new Date();
today.setHours(0, 0, 0, 0);

const getInitialDate = () => {
  if (props.range && modelValue.value)
    return (modelValue.value as DateRange).start || new Date();
  if (!props.range && modelValue.value) return modelValue.value as Date;
  return new Date();
};

const displayDate = ref(getInitialDate());
displayDate.value.setHours(0, 0, 0, 0);

const currentLocale = computed(() => locales[props.locale]);

const yearRange = computed(() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 10; i <= currentYear + 10; i++) {
    years.push(i);
  }
  return years;
});

const monthOptions = computed(() => {
  return currentLocale.value.months.map((month, index) => ({
    value: index,
    label: month
  }));
});

const selectedYear = computed({
  get: () => displayDate.value.getFullYear(),
  set: (year) => {
    const newDate = new Date(displayDate.value);
    newDate.setFullYear(year);
    displayDate.value = newDate;
    emit("display-date-change", displayDate.value);
  }
});

const selectedMonth = computed({
  get: () => displayDate.value.getMonth(),
  set: (month) => {
    const newDate = new Date(displayDate.value);
    newDate.setMonth(month);
    displayDate.value = newDate;
    emit("display-date-change", displayDate.value);
  }
});

const months = computed(() => {
  return Array.from({ length: props.numberOfMonths }, (_, i) => {
    const d = new Date(displayDate.value);
    d.setMonth(d.getMonth() + i);
    return d;
  });
});

const getCalendarGrid = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const days = [];
  const startDayOfWeek = firstDayOfMonth.getDay();
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek; i > 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i + 1),
      isCurrentMonth: false
    });
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }
  const endDayOfWeek = lastDayOfMonth.getDay();
  const grid_size = days.length + (6 - endDayOfWeek) > 35 ? 42 : 35;
  while (days.length < grid_size) {
    const lastDate = days[days.length - 1].date;
    const nextDate = new Date(lastDate);
    nextDate.setDate(lastDate.getDate() + 1);
    days.push({ date: nextDate, isCurrentMonth: false });
  }
  return days;
};

const isSameDay = (d1: Date, d2: Date | null) => {
  if (!d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const isDateDisabled = (date: Date) => {
  if (props.disableBefore && date < props.disableBefore) return true;
  if (props.disableAfter && date > props.disableAfter) return true;
  return props.disabledDates.some(disabledDate =>
    isSameDay(date, disabledDate)
  );
};

const getDayClasses = (day: { date: Date; isCurrentMonth: boolean; }) => {
  if (!selectedStyle.value) return "";
  const classes = [selectedStyle.value.day];
  if (isSameDay(day.date, today))
    classes.push(selectedStyle.value.dayStates.today);

  if (props.range && modelValue.value) {
    const { start, end } = modelValue.value as DateRange;
    if (start && end && day.date > start && day.date < end)
      classes.push(selectedStyle.value.dayStates.inRange);
    if (start && isSameDay(day.date, start))
      classes.push(
        selectedStyle.value.dayStates.rangeStart,
        selectedStyle.value.dayStates.selected
      );
    if (end && isSameDay(day.date, end))
      classes.push(
        selectedStyle.value.dayStates.rangeEnd,
        selectedStyle.value.dayStates.selected
      );
  }
  else if (!props.range && modelValue.value) {
    if (isSameDay(day.date, modelValue.value as Date))
      classes.push(selectedStyle.value.dayStates.selected);
  }

  if (!day.isCurrentMonth) classes.push(selectedStyle.value.dayStates.outside);
  if (isDateDisabled(day.date))
    classes.push(selectedStyle.value.dayStates.disabled, "pointer-events-none");

  return classes.join(" ");
};

const selectDate = (date: Date) => {
  if (isDateDisabled(date)) return;

  emit("date-click", date);
  if (props.range) {
    const currentRange = (modelValue.value as DateRange) || {
      start: null,
      end: null
    };
    if (!currentRange.start || currentRange.end) {
      modelValue.value = { start: date, end: null };
    }
    else if (date < currentRange.start) {
      modelValue.value = { start: date, end: currentRange.start };
    }
    else {
      modelValue.value = { start: currentRange.start, end: date };
    }
  }
  else {
    modelValue.value = date;
  }
};

const prevMonth = () => {
  displayDate.value = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth() - 1,
    1
  );
  emit("display-date-change", displayDate.value);
};

const nextMonth = () => {
  displayDate.value = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth() + 1,
    1
  );
  emit("display-date-change", displayDate.value);
};
</script>
