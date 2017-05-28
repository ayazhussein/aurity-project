export const USERS_URL = "https://timesheet-staging-aurity.herokuapp.com/api/users";

export function generateMonthUrlForUser(month, year, userId) {
    return `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month}/${year}/${userId}`;
}
export function generateApproveUrl(weekId, userId) {
    return `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${weekId}/users/${userId}`
}