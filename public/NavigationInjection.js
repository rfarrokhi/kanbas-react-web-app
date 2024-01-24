var KanbasNavigationPath = '/Kanbas/Navigation/index.html';
var KanbasNavigationTargetElementId = 'kanbas-navigation';

var CourseNavigationPath = '/Kanbas/Courses/Navigation/index.html';
var CourseNavigationTargetElementId = 'course-navigation';

var AccountNavigationPath = '/Kanbas/Account/Navigation/index.html';
var AccountNavigationTargetElementId = 'account-navigation';

/**
 * Injects the HTML content into the target element.
 * @param {string} htmlContent The HTML content to inject.
 * @param {string} targetElementId The ID of the target element.
 */
function injectHTML(htmlContent, targetElementId) {
    if (!targetElementId || targetElementId.length === 0) {
        console.error('Target element ID is required.');
        return;
    }

    let targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
    } else {
        console.error('Target element not found.');
    }
}



fetch(KanbasNavigationPath)
    .then(response => response.text())
    .then(htmlContent => {
        injectHTML(htmlContent, KanbasNavigationTargetElementId);
    })
    .catch(error => console.error('Error fetching HTML file for Kanbas Navigation:', error));

fetch(CourseNavigationPath)
    .then(response => response.text())
    .then(htmlContent => {
        injectHTML(htmlContent, CourseNavigationTargetElementId);
    })
    .catch(error => console.error('Error fetching HTML file for Course Navigation:', error));


fetch(AccountNavigationPath)
    .then(response => response.text())
    .then(htmlContent => {
        injectHTML(htmlContent, AccountNavigationTargetElementId);
    })
    .catch(error => console.error('Error fetching HTML file for Account Navigation:', error));
