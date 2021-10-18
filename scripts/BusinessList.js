
 import { useBusiness } from './BusinessProvider.js'
 import { Business } from './Business.js'
 import { newYorkBusinesses } from './BusinessProvider.js'
 
 export const BusinessList = () => {
 
    //  const contentElement = document.querySelector("#BusinessList")
     const businesses = useBusiness()
 
     let businessHTMLRepresentations = ""
     for (const singleBusinessObject of businesses) {

             businessHTMLRepresentations += Business(singleBusinessObject)

     }
 
     document.querySelector("#BusinessList").innerHTML += `
         <article class="businessList">
             ${businessHTMLRepresentations}
         </article>
     `
}

export const newYorkBusinessList = () => {
    const businesses = newYorkBusinesses()

    let businessHTMLRepresentations = ""
    for (const singleBusinessObject of businesses) {
        businessHTMLRepresentations += Business(singleBusinessObject)
    }

    document.querySelector("#businessList--newYork").innerHTML += `
        <article class="newYorkBusinessList">
            ${businessHTMLRepresentations}
        </article>
    `
}