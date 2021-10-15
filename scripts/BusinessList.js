
 import { useBusiness } from './BusinessProvider.js'
 import { Business } from './Business.js'
 
 export const BusinessList = () => {
 
     const contentElement = document.querySelector("#BusinessList")
     const businesses = useBusiness()
 
     let businessHTMLRepresentations = ""
     for (const singleBusinessObject of businesses) {

             businessHTMLRepresentations += Business(singleBusinessObject)

     }
 
     contentElement.innerHTML += `
         <article class="businessList">
             ${businessHTMLRepresentations}
         </article>
     `
}