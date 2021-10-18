export const Business = (businessObject) => {
    return `
        <section class="business card">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <p class="business__address">${businessObject.addressFullStreet}</p>
            <p class="business__addressLineTwo">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
            <hr>
        </section>
    `
}