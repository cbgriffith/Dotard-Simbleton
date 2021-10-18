
 import { useBusiness } from './BusinessProvider.js'
 import { Business } from './Business.js'
 
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