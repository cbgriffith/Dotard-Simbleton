export const Business = (businessObject) => {
    return `
        <section class="business card">
            <h2 class="business__name">${businessObject.name}</h2>
            <p class="business__address">${businessObject.address}</p>
            <p class="business__addressZip">${businessObject.addressZip}</p>
            <hr>
        </section>
    `
}