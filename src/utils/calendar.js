const DAYS_IN_WEEK = 7;

function getFirstDayInMonth(date) {
    // debugger;
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getDaysInMonth(date) {
    const resultDate = getFirstDayInMonth(date);
    // console.log(resultDate.getMonth());
    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);
    // console.log(resultDate);
    return resultDate.getDate();
}

function getDays(date) {
    let daysInMonth = getDaysInMonth(date);
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    return days
}

export default function getWeeks(date, firstDayOfWeek = 0, forceSixRows = false) {
    let days = getDays(date);
    let daysInMonth = days.length;
    let week = [];
    let weeks = [];
    days.forEach(day => {
        if (week.length > 0 && day.getDay() === firstDayOfWeek) {
            weeks.push(week);
            week = [];
        }

        week.push(day);

        if (days.indexOf(day) === days.length - 1) {
            weeks.push(week)
        }
    });
    const firstWeek = weeks[0];

    for (let i = DAYS_IN_WEEK - firstWeek.length; i > 0; i--) {
        const outsideDate = new Date(firstWeek[0]);
        outsideDate.setDate(firstWeek[0].getDate() - 1);
        firstWeek.unshift(outsideDate);
        daysInMonth++
    }
    const lastWeek = weeks[weeks.length - 1];

    for (let i = lastWeek.length; i < DAYS_IN_WEEK; i++) {
        const outsideDate = new Date(lastWeek[lastWeek.length - 1]);
        outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
        lastWeek.push(outsideDate);
        daysInMonth++
    }

    // IF we want to constantly have 6 rows
    if (forceSixRows && daysInMonth < 42) {
        let lastDayOfMonth = (weeks[weeks.length - 1][6]);
        let lastWeek = [];
        let i = 1;

        while (daysInMonth < 42) {
            let lastDayOfMonthClone = new Date(lastDayOfMonth);
            let day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i));

            if (lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
                weeks.push(lastWeek);
                lastWeek = []
            }

            lastWeek.push(day);

            daysInMonth++;
            i++
        }

        // push last week after finishing loop
        weeks.push(lastWeek)
    }

    return weeks
}