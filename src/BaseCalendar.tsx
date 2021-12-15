import React from 'react';

import FullCalendar, {
  CalendarOptions,
  EventContentArg,
} from '@fullcalendar/react';

import { BASE_OPTION_REFINERS } from '@fullcalendar/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BASE_OPTION_REFINERS as any).schedulerLicenseKey = String;

export type ExtendedPropsType = {
  discrib: string;
  timeTextColor: string;
};

export const BaseEventContent = (eventObj: EventContentArg) => {
  const { event } = eventObj;
  const { title, extendedProps } = event || {};
  const { discrib, timeTextColor } = (extendedProps || {}) as ExtendedPropsType;

  const timeStr = ``;
  return (
    <>
      <div className="h-font-12 meeting-event-content">
        <div>{title}</div>
        {!!discrib && <div>{discrib}</div>}
        <div className={`time`} style={{ color: timeTextColor }}>
          {timeStr}
        </div>
      </div>
    </>
  );
};

const BaseCalendar = React.forwardRef<FullCalendar, CalendarOptions>(
  (props, ref) => {
    return (
      <div className="base-calendar">
        <FullCalendar
          ref={ref}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          plugins={[]}
          editable={false}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,today,next',
            center: 'title',
            right: '',
          }}
          dayHeaderContent={({ date }) => {
            return (<div></div>);
          }}
          eventMinHeight={1}
          eventMinWidth={100}
          eventContent={BaseEventContent}
          slotMinTime="00:00:00"
          allDaySlot={false}
          nowIndicator
          {...props}
        />
      </div>
    );
  },
);

export default BaseCalendar;
